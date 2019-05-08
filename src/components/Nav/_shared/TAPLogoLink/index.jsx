import React from 'react';
import { Link } from 'react-router-dom';
// import TAPColor from 'assets/images/TAP_Color.svg';
import whiteClover from '../../../../assets/images/clover_white.png';
import './styles.scss';

const TAPLogoLink = ({ size }) => (
  <Link to="/" className="Nav__logo-container">
    <div className="logoContainer">
      <img
        src={whiteClover}
        width={size || 40}
        height={size || 40}
        alt="white clover"
      />
      {/* <p className="beta">*β</p> */}
    </div>
  </Link>
);

export default TAPLogoLink;
