import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({user}) => {
  const {id, first_name, last_name} = user;
  return (
    <li>
      <Link to={`/users/${id}`}>
        {first_name}&nbsp;{last_name}
      </Link>
    </li>
  )
}; 

UserListItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserListItem;