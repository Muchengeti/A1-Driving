import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';



class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <NavBar></NavBar>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
