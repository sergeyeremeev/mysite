import React, { Component } from 'react';
import './App.css';

import Header from './header/header';
import WorkExperience from './work-experience/work-experience';

import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700');

  body {
    font-family: 'Open Sans', sans-serif;
    background: #f7f7f7;
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
        </div>
    );
  }
}

export default App;
