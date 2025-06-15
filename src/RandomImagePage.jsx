import React from 'react';
import CustomButton from './components/CustomButton';

function RandomImagePage({ imgUrl, setImgUrl }) {
  const handleClick = () => {
    setImgUrl(`https://picsum.photos/400?random=${Math.random()}`);
  };

  return (
    <div className="random-image-container">
      <h2>Foto-Generator</h2>
      <CustomButton onClick={handleClick}>Jetzt starten</CustomButton>
      <div className="random-image-display">
        {imgUrl && <img src={imgUrl} alt="Random" 
        style={{ width: "30%", height: "30%", objectFit: "contain" }} />}
        {!imgUrl && <p className="smallText">Noch kein Foto generiert.</p>}
      </div>
    </div>
  );
}

export default RandomImagePage;