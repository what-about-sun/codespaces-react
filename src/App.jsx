import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import RandomImagePage from './RandomImagePage';
import RandomCharPage from './RandomCharPage';
import RandomColorPage from './RandomColorPage';

function App() {
  // Zustand für Bild und Zeichen zentral speichern
  const [imgUrl, setImgUrl] = useState(null);
  const [char, setChar] = useState('');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | <Link to="/random-image">Zufallsbild</Link> | <Link to="/random-char">Zufallszeichen</Link> | <Link to="/random-color">Zufallsfarbe</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={
            <main>
              <div className="startseite-text">Willkommen auf der Startseite!</div>
            </main>
          } />
          <Route path="/random-image" element={
            <RandomImagePage imgUrl={imgUrl} setImgUrl={setImgUrl} />
          } />
          <Route path="/random-char" element={
            <RandomCharPage char={char} setChar={setChar} />
          } />
          <Route path="/random-color" element={<RandomColorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
