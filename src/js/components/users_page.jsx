import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { loadUsers } from '../actions/users_actions';
import UserList from './users/user_list';

class UsersPage extends Component {
  componentWillMount() {
    this.props.loadUsers();
  }

  _renderUsers() {
    const list = this.props.users.list;
    if (! list) return <p>The list is empty.</p>;

    // list from firebase are object with oid as key
    // Transform to an array of users, with id added
    const users = Object.keys(list)
      .map(key => Object.assign({}, list[key], {id: key}));

    return <UserList users={users} />
  }

  render() {
    return(
      <div>
        <h1>Users</h1>
        {this._renderUsers()}

        <Link to={"/users/new"}>
          New user
        </Link>
      </div>
    );
  }
}

UsersPage.propTypes = {
  loadUsers: PropTypes.func.isRequired,
  users: PropTypes.object
}

const mapStateToProps = ({users}) => {
  return {
    users
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadUsers
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);