import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react'

import NavBar from './semantic_ui/nav_bar';
// import NavBar from './nav_bar';

class App extends Component {    
  render() {
    return (
      <Container>
        <NavBar />
        <main role="main">
          <div className="container">
            {this.props.children}
          </div>
        </main>
        <footer>
          <p>&copy; hf 2017</p>
        </footer>
      </Container>
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

const mapStateToProps = () => {
  return { 
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(App);