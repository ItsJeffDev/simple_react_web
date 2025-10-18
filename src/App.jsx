import React from 'react';
import './App.css';
import Navbar from './inc/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import VMC from './inc/VMC';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;