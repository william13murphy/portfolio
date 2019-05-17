import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import myResume from './BillyMurphy_Resume_5-3-19.pdf';
import { Tabs, Tab } from 'react-mdl';
import './styles.scss';

class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    return (
      <div className="Resume">
        <Tabs
          onChange={tabId => {
            tabId === 0
              ? this.setState({ pageNumber: 1 })
              : this.setState({ pageNumber: 2 });
          }}
          ripple
        >
          <Tab>Previous</Tab>
          <Tab>Next</Tab>
        </Tabs>

        <div style={{ width: '600' }}>
          <Document
            className="resume-content"
            file={myResume}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={this.state.pageNumber} width={600} />
          </Document>
        </div>
      </div>
    );
  }
}

export default Resume;
