import React from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UseEffect from '../Components/useEffect/useEffect.component';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';




function App() {
  return <div className="App">
    <Router>
      <div className="App__links">
        <nav className="App__navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/useEffect">useEffect</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/useEffect">
            <UseEffect />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
}

export default App;
