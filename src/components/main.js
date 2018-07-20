import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './about';
import Contact from './contact';
import Projects from './project';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/project" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;