import React from 'react';
import CustomButton from './components/CustomButton';

function getRandomChar() {
  const ranges = [
    [0x4E00, 0x9FFF],   // Chinesisch
    [0xAC00, 0xD7AF],   // Koreanisch
    [0x0900, 0x097F],   // Devanagari (Hindi)
    [0x3040, 0x309F],   // Hiragana
    [0x30A0, 0x30FF],   // Katakana
    [0x0400, 0x04FF],   // Kyrillisch
    [0x0370, 0x03FF],   // Griechisch
    [0x0600, 0x06FF],   // Arabisch
    [0x0000, 0x007F]    // ASCII
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
      <h2>Schriftzeichen-Generator</h2>
      <CustomButton onClick={handleClick}>Jetzt starten</CustomButton>
      <div className="random-char-display">
        {char && <span>{char}</span>}
        {!char && <p className="smallText">Noch kein Schriftzeichen generiert.</p>}
      </div>
    </div>
  );
}

export default RandomCharPage;