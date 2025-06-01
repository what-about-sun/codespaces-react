import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RandomImagePage from './RandomImagePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | <Link to="/random-image">Zufallsbild</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={
            <main>
              <div className="startseite-text">Willkommen auf der Startseite!</div>
            </main>
          } />
          <Route path="/random-image" element={<RandomImagePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
