// filepath: /workspaces/codespaces-react/src/RandomImagePage.jsx
import { useState } from 'react';

function RandomImagePage() {
  const [imgUrl, setImgUrl] = useState(null);

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