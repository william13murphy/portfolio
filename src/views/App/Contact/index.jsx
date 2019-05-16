import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Billy Murphy</h2>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{ height: '250px' }}
              />
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                Lorem Ipsum
              </p>
            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{ fontSize: '24px' }}>
                      <FontAwesomeIcon icon={faPhoneSquare} />
                      (123)-456-7890
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{ fontSize: '24px' }}>
                      <FontAwesomeIcon icon={faEnvelope} />
                      William13Murphy@gmail.com
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
