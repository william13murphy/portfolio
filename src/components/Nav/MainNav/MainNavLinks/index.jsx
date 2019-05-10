import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavLinks = props => {
  return props.routes.map((cV, i) => {
    if (!cV.hideNavLink) {
      return (
        <NavLink className="MainNavLinks__NavLink" {...cV} to={cV.path} key={i}>
          {cV.name}
        </NavLink>
      );
    } else {
      return null;
    }
  });
};

export default MainNavLinks;
