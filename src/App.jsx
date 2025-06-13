import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import RandomImagePage from './RandomImagePage';
import RandomCharPage from './RandomCharPage';
import RandomColorPage from './RandomColorPage';
import RandomEmojiPage from './RandomEmojiPage';

function App() {
  // Zustand für Bild und Zeichen zentral speichern
  const [imgUrl, setImgUrl] = useState(null);
  const [char, setChar] = useState('');
  const [color, setColor] = useState(null);
  const [emoji, setEmoji] = useState(null);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/random-image">Foto</Link> | 
            <Link to="/random-char">Schriftzeichen</Link> | 
            <Link to="/random-color">Farbe</Link> | 
            <Link to="/random-emoji">Symbol/Emoji</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={
            <main>
              <div className="startseite-text">Willkommen!</div>
            </main>
          } />
          <Route path="/random-image" element={
            <RandomImagePage imgUrl={imgUrl} setImgUrl={setImgUrl} />
          } />
          <Route path="/random-char" element={
            <RandomCharPage char={char} setChar={setChar} />
          } />
          <Route path="/random-color" element={
            <RandomColorPage color={color} setColor={setColor} />
          } />
          <Route path="/random-emoji" element={
            <RandomEmojiPage emoji={emoji} setEmoji={setEmoji} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
