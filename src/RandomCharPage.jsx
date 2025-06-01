import React from 'react';

function getRandomChar() {
  const ranges = [
    [0x4E00, 0x9FFF],   // Chinesisch
    [0xAC00, 0xD7AF],   // Koreanisch
    [0x0900, 0x097F],   // Devanagari (Hindi)
  ];
  const [start, end] = ranges[Math.floor(Math.random() * ranges.length)];
  const code = start + Math.floor(Math.random() * (end - start));
  return String.fromCharCode(code);
}

function RandomCharPage({ char, setChar }) {
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