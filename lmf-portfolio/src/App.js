import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import About from './Pages/about';
import Projects from './Pages/projects';
import Contact from './Pages/contact';
// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
