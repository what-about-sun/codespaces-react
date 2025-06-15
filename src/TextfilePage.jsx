// filepath: src/TextfilePage.jsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function TextfilePage() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/textfile.b64")
      .then((res) => res.text())
      .then((base64) => {
        // base64 zu normalem Text dekodieren
        const decoded = atob(base64);
        setText(decoded);
      });
  }, []);

  return (
   <div className="text-container">
      <h1>Base64-dekodierte Datei</h1>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default TextfilePage;