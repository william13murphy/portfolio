import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import AboutMe from './AboutMe';
import MainNav from '../../components/Nav/MainNav';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Route
          exact={true}
          path="/"
          render={() => <Redirect to="/app/about-me" />}
        />
        <Route path="/app/about-me" component={AboutMe} />
      </div>
    );
  }
}

export default App;
