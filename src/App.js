import React, { Component } from 'react';
import './App.css';

import Header from './header/header';
import WorkExperience from './components/work-experience/work-experience';
import Portfolio from './components/projects/projects';

import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700');

  html {
    box-sizing: border-box;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: #F5F3EE;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    background: none;
    border: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
  }
`;

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <Header />
            <WorkExperience />
            <Portfolio />
        </div>
    );
  }
}

export default App;
