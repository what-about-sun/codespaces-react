import { useState } from 'react';
import CustomButton from './components/CustomButton';

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
      <h2>Farb-Generator</h2>
      <CustomButton onClick={handleClick}>Jetzt starten</CustomButton>
      {color && (
        <div className="random-color-circle"
          style={{ backgroundColor: color }}
          >
        </div>
      )}
      {color && <p>Aktuelle Farbe: {color}</p>}
      {!color && <p className="smallText">Noch keine Farbe generiert.</p>}
     </div>
  );  
}