// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
//
// import { loadUsers } from '../actions/users_actions';
// import UserList from './users/user_list';
//
// class UsersPage extends Component {
//   componentWillMount() {
//     this.props.loadUsers();
//   }
//
//   _renderUsers() {
//     const list = this.props.users.list;
//     if (! list) return <p>The list is empty.</p>;
//     return <UserList users={list} />
//   }
//
//   render() {
//     return(
//       <div>
//         <h1>Users</h1>
//         {this._renderUsers()}
//
//         <Link to={"/users/new"}>
//           New user
//         </Link>
//       </div>
//     );
//   }
// }
//
// UsersPage.propTypes = {
//   loadUsers: PropTypes.func.isRequired,
//   users: PropTypes.object
// }
//
// const mapStateToProps = ({users}) => {
//   return {
//     users
//   };
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     loadUsers
//   }, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { loadUsers } from '../actions/users_actions';
import UserList from './users/user_list';

import { Route } from 'react-router-dom';

import Authentication from './hoc/authentication';
import UserDetails from './users/user_details';
// import UserNew from './users/user_new';
// import UserEdit from './users/user_edit';

class UsersPage extends Component {
  componentWillMount() {
    this.props.loadUsers();
  }

  _renderUsers() {
    const list = this.props.users.list;
    if (! list) return <p>The list is empty.</p>;
    return <UserList users={list} />
  }

  render() {
    return(
      <div className="flex-container">
        <div className="sidebar pannel">
          <h1>Users</h1>
          {this._renderUsers()}

          <Link to={"/users/new"}>
            New user
          </Link>
        </div>
          
        <div className="pannel">
          <Route path="/users/:id" component={Authentication(UserDetails)} />
        </div>
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