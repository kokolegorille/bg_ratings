import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './nav_bar';
// import NavBar from './semantic_ui/nav_bar';
import AuthNavBar from './auth_nav_bar';

import LoadingDots from './common/loading_dots';
import { appBootup } from '../actions/application_actions';

class App extends Component {
  componentWillMount() {
    // Application is starting...
    this.props.appBootup(Date.now());
  }
  
  renderWelcome() {
    const currentUser = this.props.currentUser;
    if (!currentUser) return;
    return <span>welcome {currentUser.email}</span>
  }
  
  renderSpinner() {
    // Network access is really very fast! and the spinner might just blink.
    if (!this.props.isFetching) return;
    return <LoadingDots interval={100} dots={20} />
  }
  
  renderNavBar() {
    const { isAuthenticated } = this.props;
    return (isAuthenticated) ? <AuthNavBar /> : <NavBar />;
  }
  
  render() {
    return (
      <div id="wrapper">
        <header>
          {this.renderNavBar()}
          <div>
            {this.renderWelcome()}
            {this.renderSpinner()}
          </div>
        </header>
        <main role="main">
          {this.props.children}
        </main>
        <footer>
          <p>&copy; hf 2017</p>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  appBootup: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  currentUser: PropTypes.object
}

const mapStateToProps = ({authentication, application}) => {
  return { 
    isAuthenticated: authentication.isAuthenticated,
    currentUser: authentication.currentUser,
    isFetching: application.isFetching
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    appBootup
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(App);