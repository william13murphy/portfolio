import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faFreeCodeCamp,
} from '@fortawesome/free-brands-svg-icons';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-image"
            />
            <div className="banner-text">
              <h1>Front End Developer</h1>
              <hr />
              <p>HTML5 | CSS3 | Bootstrap | JavaScript | React</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/devwilliammurphy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://github.com/william13murphy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href="https://www.freecodecamp.org/william13murphy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFreeCodeCamp} />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
