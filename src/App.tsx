import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import Film from './components/Film/Film';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
      <h1>Film List</h1>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Film />} />
          <Route
            path="/about"
            element={
              <About
                name="Elisia KOUMBA"
                git="https://github.com/elisia-kba"
                photo="avatar.jpg"
              />
            }
          />
        </Routes>

        {/* Navigation */}
        <nav className="navbar">
          <NavLink to="/"> Accueil </NavLink>
          <NavLink to="/about"> À propos </NavLink>
        </nav>
      </Router>
    </div>
  );
}

export default App;
