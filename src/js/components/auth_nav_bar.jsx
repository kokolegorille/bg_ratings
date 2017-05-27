import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';

const AuthNavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/tournaments">Tournaments</NavLink></li>
        <li><NavLink to="/ranking">Ranking</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/sign_out">Sign out</NavLink></li>
      </ul>
    </nav>
  );
}

export default AuthNavBar;