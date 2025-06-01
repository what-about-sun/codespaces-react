import { useState } from 'react';

function getRandomChar() {
  // Unicode-Bereiche für einige asiatische Schriftzeichen
  const ranges = [
    [0x4E00, 0x9FFF],   // Chinesisch (CJK Unified Ideographs)
    [0xAC00, 0xD7AF],   // Koreanisch (Hangul Syllables)
    [0x0900, 0x097F],   // Devanagari (Hindi)
  ];
  // Wähle zufällig einen Bereich
  const [start, end] = ranges[Math.floor(Math.random() * ranges.length)];
  // Wähle zufällig ein Zeichen aus dem Bereich
  const code = start + Math.floor(Math.random() * (end - start));
  return String.fromCharCode(code);
}

function RandomCharPage() {
  const [char, setChar] = useState('');

  const handleClick = () => {
    setChar(getRandomChar());
  };

  return (
    <div className="random-char-container">
      <h2>Zufallszeichen Generator</h2>
      <button onClick={handleClick}>Zeige ein zufälliges Zeichen</button>
      <div className="random-char-display">
        {char && <span>{char}</span>}
      </div>
    </div>
  );
}

export default RandomCharPage;