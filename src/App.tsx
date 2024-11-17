import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;