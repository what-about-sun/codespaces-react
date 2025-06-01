// filepath: /workspaces/codespaces-react/src/RandomImagePage.jsx
import React from 'react';

function RandomImagePage({ imgUrl, setImgUrl }) {
  const handleClick = () => {
    setImgUrl(`https://picsum.photos/400?random=${Math.random()}`);
  };

  return (
    <div className="random-image-container">
      <h2>Zufallsbild Generator</h2>
      <button onClick={handleClick}>Zeige ein zufälliges Bild</button>
      <div style={{ marginTop: 20 }}>
        {imgUrl && <img src={imgUrl} alt="Random" />}
      </div>
    </div>
  );
}

export default RandomImagePage;