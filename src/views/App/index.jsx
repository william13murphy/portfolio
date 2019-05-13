import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Routes from './Routes';
import './styles.scss';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title="Billy Murphy" scroll>
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Cotnact</Link>
              </Navigation>
            </Header>
            <Drawer title="Billy Murphy">
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Cotnact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Routes />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
