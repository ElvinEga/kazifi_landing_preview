import React, { useState } from "react";
import mammoth from "mammoth";
import { Document, Page, pdfjs } from "react-pdf";

// Worker for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FileImporter: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [pdfNumPages, setPdfNumPages] = useState<number>(0);
  const [pdfPageNumber, setPdfPageNumber] = useState<number>(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (!file) return;

    if (file.name.endsWith(".docx")) {
      const result = await convertDocxToHtml(file);
      setHtmlContent(result);
      setPdfNumPages(0); // Reset PDF state
    } else if (file.name.endsWith(".doc")) {
      alert("Sorry, .doc files are not supported.");
      //   const result = await mammoth.extractRawText({ arrayBuffer: file });
      //   const docHtml = result.value; // HTML content of the document
      //   setHtmlContent(docHtml);
      //   setPdfNumPages(0); // Reset PDF state
    } else if (file.name.endsWith(".pdf")) {
      setHtmlContent(""); // Reset HTML state
      displayPDF(file);
    } else {
      alert("Please select a .docx, .doc, or .pdf file");
    }

    setSelectedFile(file);
  };

  const convertDocxToHtml = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = async (event) => {
        if (event.target?.result) {
          const arrayBuffer = event.target.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          const result = await mammoth.convertToHtml({
            arrayBuffer: uint8Array,
          });
          resolve(result.value);
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

    reader.onload = () => {
      // const url = reader.result;
      //   setSelectedFile(url as File);
    };

    reader.onerror = () => {
      alert("Failed to read the PDF file.");
    };

    reader.readAsDataURL(file);
  };

  //   const nextPage = () => {
  //     if (pdfPageNumber < pdfNumPages) {
  //       setPdfPageNumber(pdfPageNumber + 1);
  //     }
  //   };

  //   const previousPage = () => {
  //     if (pdfPageNumber > 1) {
  //       setPdfPageNumber(pdfPageNumber - 1);
  //     }
  //   };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".docx,.doc,.pdf" />
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

export default FileImporter;
