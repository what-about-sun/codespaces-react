import { useState } from 'react';

function getRandomColor() {
  // Zufällige HEX-Farbe generieren
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function RandomColorPage() {
  const [color, setColor] = useState(getRandomColor());

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div className="random-color-container">
      <h2>Zufallsfarben-Generator</h2>
      <button onClick={handleClick}>Zeige eine zufällige Farbe</button>
      <div className="random-color-circle" style={{ backgroundColor: color }} />
      <div style={{ marginTop: 16, fontSize: '1.5rem' }}>{color}</div>
    </div>
  );
}

export default RandomColorPage;