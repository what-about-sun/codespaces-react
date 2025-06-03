import { useState } from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function RandomColorPage({ color, setColor }) {
  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div className="random-color-container">
      <h2>Zufallsfarbe Generator</h2>
      <button onClick={handleClick}>Zufallsfarbe generieren</button>
      {color && (
        <div className="random-color-circle"
          style={{ backgroundColor: color }}
          >
        </div>
      )}
      {color && <p>Aktuelle Farbe: {color}</p>}
      {!color && <p>Noch keine Farbe generiert.</p>}
     </div>
  );  
}