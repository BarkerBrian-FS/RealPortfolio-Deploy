import React from 'react';
import { Routes , Route } from 'react-router-dom'
import About from "./Pages/About";
import LoadingScreen from './Components/Loading.js'; 
import './App.css';

function App() {
  return (
  
    <div className="App">
    <LoadingScreen />
      <section>
        <Routes>
          <Route path="/" element={<About/>} />
        </Routes>
      </section>
      </div>
  );
}

export default App;
