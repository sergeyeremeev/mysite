import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import WorkExperience from './components/work-experience/work-experience';
import Portfolio from './components/projects/projects';
import Skills from './components/skills/skills';
import Message from './components/message/message';
import Footer from './components/footer/footer';

import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Ubuntu:300,400,700');

  html {
    box-sizing: border-box;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    background: #F5F3EE;
    font-family: Lato, sans-serif;
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
        <div>
            <Header />
            <WorkExperience />
            <Portfolio />
            <Skills />
            <Message />
            <Footer />
        </div>
    );
  }
}

export default App;
