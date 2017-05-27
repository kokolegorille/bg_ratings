import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/sign_in">Sign in</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;