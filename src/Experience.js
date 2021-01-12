import React, { Component } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './Experience.css';


export default class Experience extends Component {
    render() {
        return (
            <div className="Experience">
        <header className="Experience-header">
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
          >
            Learn React
          </a>
        </header>
      </div>
        )
    }
}