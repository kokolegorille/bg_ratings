import React, { PropTypes } from 'react';

import UserListItem from './user_list_item';

const UserList = ({users}) => (
  <ul>
    {users.map(user => <UserListItem key={user.id} user={user} />)}
  </ul>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default UserList;