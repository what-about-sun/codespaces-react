// filepath: src/TextfilePage.jsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function TextfilePage() {
  const [shift, setShift] = useState(42); // Standardwert 42
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/textfile.b64")
      .then((res) => res.text())
      .then((base64) => {
        // base64 zu normalem Text dekodieren (UTF-8-fähig)
        const decoded = new TextDecoder("utf-8").decode(
          Uint8Array.from(atob(base64), c => c.charCodeAt(0))
        );
        setText(decoded);
      });
  }, []);

  function rotN(str, shift) {
    return str.replace(/[a-zA-Z]/g, function(c) {
      const base = c <= 'Z' ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base);
    });
  }

  const handleChange = (e) => {
    // Nur Zahlen, maximal 3 Stellen
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setShift(Number(value) || 0);
  };

  return (
   <div className="text-container">
      <h2>Ein Text ist ein Text mit Text.</h2>
      <label className="modernInput">
        Form:&nbsp;
        <input className="inputField"
          type="text"
          value={shift}
          onChange={handleChange}
          maxLength={4}
          style={{ width: "2em", textAlign: "center", fontSize: "0.8em" }}
        />
      </label>
      <ReactMarkdown>{rotN(text, shift)}</ReactMarkdown>
    </div>
  );
}

export default TextfilePage;