import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';
import './styles.scss';

class Projects extends Component {
  state = {
    activeTab: 0,
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover',
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>FIRST PROJECTS</CardText>
            <CardActions>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover',
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>SECOND PROJECTS</CardText>
            <CardActions>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover',
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>ThIRD PROJECTS</CardText>
            <CardActions>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return <div>Features</div>;
    } else if (this.state.activeTab === 2) {
      return <div>Clients</div>;
    }
  }

  render() {
    return (
      <div className="Projects">
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Projects</Tab>
            <Tab>Features</Tab>
            <Tab>Clients</Tab>
          </Tabs>
        </div>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
