// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './Home';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <section id="about" className="section">
        <h1>About Me</h1>
        <p>Brief introduction about yourself...</p>
      </section>
      <section id="projects" className="section">
        <h1>My Projects</h1>
        <p>Details about your projects...</p>
      </section>
      <section id="contact" className="section">
        <h1>Contact Me</h1>
        <p>How people can reach you...</p>
      </section>
    </div>
  );
}

export default App;
