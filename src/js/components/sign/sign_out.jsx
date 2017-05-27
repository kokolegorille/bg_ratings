import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signoutUser } from '../../actions/sign_actions';

class Signout extends Component {  
  componentDidMount() {
    this.props.signoutUser();
  }
    
  render() {
    return(
      <div>
        <h1>Sign out</h1>
        <p>Hasta la vista, Baby!</p>
      </div>
    );
  }
}

Signout.propTypes = {
  signoutUser: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signoutUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signout);