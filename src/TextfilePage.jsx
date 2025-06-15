// filepath: src/TextfilePage.jsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function TextfilePage() {
  const [shift, setShift] = useState(42); // Standardwert für ROT-Verschiebung (z.B. ROT42)
  const [text, setText] = useState("");   // Hier wird der dekodierte Text gespeichert

  useEffect(() => {
    // Lädt die Base64-kodierte Datei und dekodiert sie UTF-8-sicher
    fetch("/textfile.b64")
      .then((res) => res.text())
      .then((base64) => {
        // atob dekodiert Base64 zu einem Latin1-String (nicht UTF-8-sicher)
        // Uint8Array.from erzeugt ein Byte-Array aus den Zeichen
        // TextDecoder("utf-8") wandelt das Byte-Array in einen echten UTF-8-String um
        const decoded = new TextDecoder("utf-8").decode(
          Uint8Array.from(atob(base64), c => c.charCodeAt(0))
        );
        setText(decoded); // Speichert den dekodierten Text im State
      });
  }, []);

  // ROT-N Funktion: Verschiebt jeden Buchstaben um 'shift' Stellen im Alphabet
  function rotN(str, shift) {
    // Sucht alle Buchstaben (a-z und A-Z) im Text
    return str.replace(/[a-zA-Z]/g, function(c) {
      // Bestimmt den Zeichencode-Startwert:
      // Großbuchstaben ('A'-'Z') starten bei 65, Kleinbuchstaben ('a'-'z') bei 97
      const base = c <= 'Z' ? 65 : 97;
      // Verschiebt den Buchstaben um 'shift' Stellen, bleibt dabei im Alphabet (Modulo 26)
      return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base);
    });
  }

  // Handler für das Eingabefeld: Erlaubt nur Zahlen, maximal 3 Stellen
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3); // Filtert Nicht-Ziffern raus
    setShift(Number(value) || 0); // Setzt den neuen Shift-Wert, 0 wenn leer
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
      {/* Gibt den verschlüsselten Text als Markdown aus */}
      <ReactMarkdown>{rotN(text, shift)}</ReactMarkdown>
    </div>
  );
}

export default TextfilePage;