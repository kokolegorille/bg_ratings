import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const NavBar = () => (
  <Menu stackable>
    <Menu.Item 
      as={NavLink}
      exact activeClassName="active" 
      to="/">
      <Icon className="home large"/>
    </Menu.Item>
    <Menu.Item 
      as={NavLink} 
      to="/users">
      Users
    </Menu.Item>
    <Menu.Item 
      as={NavLink} 
      to="/tournaments">
      Tournaments
    </Menu.Item>
    <Menu.Item 
      as={NavLink} 
      to="/ranking">
      Ranking
    </Menu.Item>
    <Menu.Item 
      as={NavLink} 
      to="/about">
      <Icon className="help large"/>
    </Menu.Item>    
  </Menu>
);

// NavBar.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
// }

export default NavBar;
