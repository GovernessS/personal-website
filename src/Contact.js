import React, { Component } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css';


export default class Contact extends Component {
    render() {
        return (
            <div className="Contact">
        <header className="Contact-header">
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