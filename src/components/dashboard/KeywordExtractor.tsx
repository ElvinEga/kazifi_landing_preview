import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const KeywordExtractor: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [keywords, setKeywords] = useState<string[]>([]);

  const handleSave = () => {
    const rawText = convertToRaw(editorState.getCurrentContent())
      .blocks.map((block) => block.text.trim())
      .join("\n");

    const extractedKeywords = rawText
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 3);

    setKeywords(extractedKeywords);
  };

  return (
    <div>
      <div className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-700">
        <div id="hs-editor-tiptap">
          {" "}
          <Editor
            editorStyle={{ height: "240px" }}
            wrapperStyle={{ padding: "16px" }}
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
      </div>
      <button
        onClick={handleSave}
        className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Save
      </button>

      <div>
        <h3>Keywords:</h3>
        <ul>
          {keywords.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* Display HTML below */}
        <h3>HTML Preview:</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: editorState.getCurrentContent().getPlainText(),
          }}
        />
      </div>
    </div>
  );
};

export default KeywordExtractor;
