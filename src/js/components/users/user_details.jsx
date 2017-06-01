import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { deleteUser } from '../../actions/users_actions';

class UserDetails extends Component {
  render() {
    const {id} = this.props.match.params;
    
    // Load user data by id from state
    const user = this.props.list[id];
    if (! user) return <p>Loading...</p>;
    
    const full_name = `${user.first_name} ${user.last_name}`;
    
    return (
      <div>
        <h1>{full_name}</h1>
              
        <ul>
          <li><Link to="/users">Index</Link></li>
          <li><Link to={`/users/${id}/edit`}>Edit</Link></li>
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
  deleteUser: PropTypes.func.isRequired,
  list: PropTypes.object
}

const mapStateToProps = ({users}) => {
  return {
    list: users.list
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);