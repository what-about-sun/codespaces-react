import CustomButton from './components/CustomButton';

function getRandomEmoji() {
  // Emoji-Range: U+1F600 bis U+1F64F (Emoticons)
  const start = 0x1F600;
  const end = 0x1F9FF; // Erweiterte Emoji-Range  
  const codePoint = start + Math.floor(Math.random() * (end - start + 1));
  return String.fromCodePoint(codePoint);
}

export default function RandomEmojiPage({ emoji, setEmoji }) {
  const handleClick = () => {
    setEmoji(getRandomEmoji());
  };

  return (
    <div className="random-emoji-container">
      <h2>Symbol-, Emoji-Generator</h2>
      <CustomButton onClick={handleClick}>Jetzt starten</CustomButton>
      {emoji && (
        <div style={{ fontSize: "18rem", margin: "1rem" }}>{emoji}</div>
      )}
      {!emoji && <p className="smallText">Noch kein Symbol/Emoji generiert.</p>}
    </div>
  );
}