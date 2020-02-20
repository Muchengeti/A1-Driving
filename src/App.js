import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
    <Router>
        <div>
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h2>A1 Driving School</h2>
          <ul className="navbar-nav auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>

          </ul>
          <ul className="navbar-nav ml-auto">
            <li><Link to={'/'} className="nav-link"> Book Now </Link></li>
          </ul>
          </nav> */}
          <NavBar></NavBar>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
