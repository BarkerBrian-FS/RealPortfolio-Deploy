import React, { Component } from 'react';
import { Routes , Route } from 'react-router-dom'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
