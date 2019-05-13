import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Resume from './Resume';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Routes;
