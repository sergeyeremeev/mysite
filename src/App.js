import React from 'react';
import { injectGlobal } from 'styled-components';
import './App.css';
import Header from './components/header/header';
import WorkExperience from './components/work-experience/work-experience';
import Portfolio from './components/projects/projects';
import Skills from './components/skills/skills';
import Message from './components/message/message';
import Footer from './components/footer/footer';

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
    outline: none !important;
    cursor: pointer;
  }
`;

const App = () => (
    <div>
        <Header />
        <WorkExperience />
        <Portfolio />
        <Skills />
        <Message />
        <Footer />
    </div>
);

export default App;
