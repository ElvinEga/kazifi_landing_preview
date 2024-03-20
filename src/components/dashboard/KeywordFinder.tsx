import React, { useCallback, useEffect, useMemo, useState } from "react";
import mammoth from "mammoth";
import { Document, Page, pdfjs } from "react-pdf";
import {
  PDFDocumentProxy,
  TextItem,
  TextMarkedContent,
} from "pdfjs-dist/types/src/display/api";

// Worker for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const KeywordsFinder: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [pdfNumPages, setPdfNumPages] = useState<number>(0);
  const [pdfPageNumber, setPdfPageNumber] = useState<number>(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pdfText, setPdfText] = useState<string>("");
  const keywords = useMemo(() => ["Experienced", "Node.js,", "skills"], []);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (!file) return;

    if (file.name.endsWith(".docx")) {
      const result = await convertDocxToHtml(file, keywords); // Pass keywords here
      setHtmlContent(result);
      setPdfText("");
      setPdfNumPages(0); // Reset PDF state
    } else if (file.name.endsWith(".doc")) {
      alert("Sorry, .doc files are not supported.");
    } else if (file.name.endsWith(".pdf")) {
      setHtmlContent(""); // Reset HTML state
      displayPDF(file);
    } else {
      alert("Please select a .docx, .doc, or .pdf file");
    }

    setSelectedFile(file);
  };
  const convertDocxToHtml = async (
    file: File,
    keywords: string[]
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = async (event) => {
        if (event.target?.result) {
          const arrayBuffer = event.target.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          const result = await mammoth.convertToHtml({
            arrayBuffer: uint8Array,
          });
          let htmlContent = result.value;

          // Highlight keywords
          keywords.forEach((keyword) => {
            const regex = new RegExp(`(${keyword})`, "gi");
            htmlContent = htmlContent.replace(
              regex,
              '<span style="background-color: yellow;">$1</span>'
            );
          });

          resolve(htmlContent);
        } else {
          reject(new Error("Failed to read the file."));
        }
      };

      reader.onerror = () => {
        reject(new Error("Failed to read the file."));
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const displayPDF = async (file: File) => {
    setPdfPageNumber(1);

    const reader = new FileReader();

    reader.onload = async () => {
      const url = reader.result;
      if (url) {
        const pdf = await pdfjs.getDocument(url).promise;
        const textContent = await getTextContentFromPDF(pdf);
        setPdfText(textContent); // Set the PDF text state
        highlightKeywordsInPDF(pdfText);
      }
    };

    reader.onerror = () => {
      alert("Failed to read the PDF file.");
    };

    reader.readAsDataURL(file);
  };

  const getTextContentFromPDF = async (pdf: PDFDocumentProxy) => {
    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      fullText += textContent.items
        .map((s: TextItem | TextMarkedContent) => {
          if ("str" in s) {
            return s.str;
          }
          return ""; // Handle the case where 'str' does not exist on 's'
        })
        .join(" ");
    }
    return fullText;
  };

  const highlightKeywordsInPDF = useCallback(
    (pdfText: string) => {
      let highlightedText = pdfText;

      keywords.forEach((keyword) => {
        const regex = new RegExp(`(${keyword})`, "gi");
        highlightedText = highlightedText.replace(
          regex,
          '<span style="background-color: yellow;">$1</span>'
        );
      });

      setHtmlContent(highlightedText);
    },
    [keywords, setHtmlContent]
  );

  useEffect(() => {
    if (pdfText != "") {
      highlightKeywordsInPDF(pdfText);
    }
  }, [highlightKeywordsInPDF, keywords, pdfText]);

  return (
    <div>
      <input
        title="Select a .docx or .pdf file"
        type="file"
        onChange={handleFileChange}
        accept=".docx,.doc,.pdf"
      />
      {htmlContent && <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
      {selectedFile && selectedFile.name.endsWith(".pdf") && (
        <div>
          <p>
            Page {pdfPageNumber} of {pdfNumPages}
          </p>
          <Document
            file={selectedFile}
            renderMode="none"
            onLoadSuccess={({ numPages }) => setPdfNumPages(numPages)}
          >
            {[...Array(pdfNumPages).keys()].map((pageNumber) => (
              <Page
                key={`page_${pageNumber + 1}`}
                pageNumber={pageNumber + 1}
              />
            ))}
          </Document>
        </div>
      )}
    </div>
  );
};

export default KeywordsFinder;
