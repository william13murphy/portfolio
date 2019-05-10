import React from 'react';
import { Link } from 'react-router-dom';
import whiteClover from '../../../../assets/images/clover_white.png';
import './styles.scss';

const PortfolioLogoLink = ({ size }) => (
  <Link to="/" className="Nav__logo-container">
    <img
      src={whiteClover}
      width={size || 40}
      height={size || 40}
      alt="white clover"
    />
  </Link>
);

export default PortfolioLogoLink;
