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
      <h2>Zufalls-Emoji Generator</h2>
      <button onClick={handleClick}>Zufalls-Emoji generieren</button>
      {emoji && (
        <div style={{ fontSize: "18rem", margin: "1rem" }}>{emoji}</div>
      )}
      {!emoji && <p>Noch kein Emoji generiert.</p>}
    </div>
  );
}