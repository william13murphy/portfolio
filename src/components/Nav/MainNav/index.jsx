import React from 'react';
import PortfolioLogoLink from '../_shared/PortfolioLogoLink';
import EFCNavLinks from './MainNavLinks';
import routes from '../../../views/App/routes';
import './styles.scss';

class MainNav extends React.Component {
  render() {
    return (
      <div className="MainNav">
        <nav className="pt-navbar">
          <div className="pt-navbar-group">
            <PortfolioLogoLink size={30} />
          </div>
          <div className="pt-navbar-group">
            <EFCNavLinks routes={routes} />
          </div>
        </nav>
      </div>
    );
  }
}

export default MainNav;
