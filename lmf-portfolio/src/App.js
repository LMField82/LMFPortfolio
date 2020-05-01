import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import About from './Pages/about';
// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <About />
      <Footer />
    </div>
  );
}

export default App;
