import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import LandingPage from './landingpage';
import AboutMe from './about';
import Contact from './contact';
import Projects from './project';
import Resume from './resume';



const Main = () => (
  <Switch>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/project" component={Projects} />
    <Route path="/resume" component={Resume} />
    </AnimatedSwitch>
  </Switch>
)

export default Main;