import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import About from './Pages/about';
import Projects from './Pages/projects';
import Contact from './Pages/contact';
import './App.css';

class App extends Component {
  state = {
    currentPage: ""
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
  return (
    <Router>
      <div className="App">
        <Nav 
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Switch>
          <Route path = "/about" component={About} />
          <Route path = "/projects" component={Projects} />
          <Route path = "/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}}

export default App;