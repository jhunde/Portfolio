// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About'
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
    // <div>
    //   <Navbar />
      
    //   <Home />
    //   <section id="about" className="section">
    //     <h1>About Me</h1>
    //     <p>Brief introduction about yourself...</p>
    //   </section>
    //   <section id="projects" className="section">
    //     <h1>My Projects</h1>
    //     <p>Details about your projects...</p>
    //   </section>
    //   <section id="contact" className="section">
    //     <h1>Contact Me</h1>
    //     <p>How people can reach you...</p>
    //   </section>
    // </div>
  );
}

export default App;
