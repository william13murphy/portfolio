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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.36311468658!2d-77.08478741277247!3d38.89370903693111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C+DC!5e0!3m2!1sen!2sus!4v1560038351439!5m2!1sen!2sus"
                width="600"
                height="450"
                frameborder="0"
                //style="border:0"
                title="Location"
                allowfullscreen
              />
              {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                Lorem Ipsum
              </p> */}
            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{ fontSize: '24px' }}>
                      <FontAwesomeIcon icon={faPhoneSquare} />
                      (540) - 272 - 9794
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
