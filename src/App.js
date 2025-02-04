import React from 'react';
import { Routes , Route } from 'react-router-dom'
import About from "./Pages/About";
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path="/" element={<About/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
