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
import TAPLogo from '../../../assets/images/TAP_Color.svg';
import EmpLogo from '../../../assets/images/employees.png';
import AngLogo from '../../../assets/images/angular.png';
import WeatherLogo from '../../../assets/images/weather.png';

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
                height: '175px',
                background: `url(${TAPLogo}) no-repeat center/cover`,
              }}
            >
              TAP-CRM
            </CardTitle>
            <CardText>Martial Arts school management software</CardText>
            <CardActions>
              <Button
                colored
                onClick={() =>
                  window.open(
                    'https://github.com/william13murphy/tap-crm',
                    '_blank'
                  )
                }
              >
                GitHub
              </Button>
              <Button
                colored
                onClick={() =>
                  window.open('https://tapdev.kinapptech.com/login', '_blank')
                }
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                height: '175px',
                background: `url(${EmpLogo}) no-repeat center`,
              }}
            >
              Employee Tracking System
            </CardTitle>
            <CardText>
              Internal HR App to help manage employees status, PTO, etc.
            </CardText>
            <CardActions>
              <Button
                colored
                onClick={() =>
                  window.open(
                    'https://github.com/william13murphy/employee-tracking-system ',
                    '_blank'
                  )
                }
              >
                GitHub
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background: `url(${AngLogo}) no-repeat center/cover`,
              }}
            >
              Todo App
            </CardTitle>
            <CardText>A functional Todo app using Anuglar7</CardText>
            <CardActions>
              <Button
                colored
                onClick={() =>
                  window.open(
                    'https://github.com/william13murphy/ang-todo',
                    '_blank'
                  )
                }
              >
                GitHub
              </Button>
            </CardActions>
            {/* <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                height: '175px',
                background: `url(${WeatherLogo}) no-repeat left`,
              }}
            >
              Weather App
            </CardTitle>
            <CardText>
              Weather App built with Vue which allows users to input location of
              choice.
            </CardText>
            <CardActions>
              <Button
                colored
                onClick={() =>
                  window.open(
                    'https://github.com/william13murphy/vue-weather ',
                    '_blank'
                  )
                }
              >
                GitHub
              </Button>
            </CardActions>
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
        <div className="projects-container">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
