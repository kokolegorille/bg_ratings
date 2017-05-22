import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './nav_bar';

class App extends Component {    
  render() {
    return (
      <div>
        <NavBar />
        <main role="main">
          <div className="container">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

// App.propTypes = {
//   appBootup: PropTypes.func.isRequired,
//   refreshToken: PropTypes.func.isRequired,
//   isFetching: PropTypes.bool,
//   isAuthenticated: PropTypes.bool,
//   currentUser: PropTypes.object
// }

const mapStateToProps = ({authentication, application}) => {
  return { 
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(App);