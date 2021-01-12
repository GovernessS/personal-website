import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Resume from "./Resume";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <p>About Me</p>
              </div>
              <div class="col-sm-3">
                <p>Contact Me</p>
              </div>
              <div class="col-sm-3">
                <p>Work Experience</p>
              </div>
              <div class="col-sm-3">
                <p>Projects</p>
              </div>
            </div>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <AboutMe/ >
        <Contact/ >
        <Experience/ >
        <Projects/ >
      </div>
    );
  }
}

export default App;
