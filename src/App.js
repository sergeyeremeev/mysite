import React, { Component } from 'react';
import './App.css';

import Header from './header/header';
import WorkExperience from './work-experience/WorkExperience';

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
