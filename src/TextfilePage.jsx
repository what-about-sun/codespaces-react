// filepath: src/TextfilePage.jsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function TextfilePage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/textfile.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="text-container">
      <h1>Text anzeigen</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default TextfilePage;