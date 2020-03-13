import React, { Component } from 'react';
import './App.css';
import './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './component/Contact';
import Home from './component/Home';
import NavbarCus from './component/NavbarCus';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel="stylesheet"></link>


      <NavbarCus/>

      <Router>
        <div>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
      


      </div>
    );
  }
}

export default App;
