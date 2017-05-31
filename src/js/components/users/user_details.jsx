import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { deleteUser } from '../../actions/users_actions';

class UserDetails extends Component {
  render() {
    const {id} = this.props.match.params;
    return (
      <div>
        <h1>User {id}</h1>

        <ul>
          <li><Link to="/users">Index</Link></li>
          <li>Edit</li>
          <li><a href="" onClick={this._handleClick.bind(this)}>Delete</a></li>
        </ul>

      </div>
    );
  }
  
  _handleClick(event) {
    event.preventDefault();
    const {id} = this.props.match.params;
    const history = this.props.history;
    this.props.deleteUser(id, history);
  }
}

UserDetails.propTypes = {
  loadUsers: PropTypes.func.isRequired,
  users: PropTypes.object
}

// const mapStateToProps = () => {
//   return {
//   };
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserDetails);