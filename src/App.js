import React from 'react';
import { injectGlobal } from 'styled-components';
import Header from './components/header/header';
import WorkExperience from './components/work-experience/work-experience';
import Portfolio from './components/projects/projects';
import Skills from './components/skills/skills';
import Message from './components/message/message';
import Footer from './components/footer/footer';
import globalStyles from './index.css';

injectGlobal([`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Ubuntu:300,400,700');
  ${globalStyles};
`]);

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
