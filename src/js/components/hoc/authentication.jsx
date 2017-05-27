import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
    
    componentWillMount() {
      if (!this.props.isAuthenticated)
        this.props.history.push('/sign_in');
    }
    
    componentWillUpdate(nextProps) {
      if (!nextProps || !nextProps.isAuthenticated)
        this.props.history.push('/sign_in');
    }
    
    render() {
      return <ComposedComponent { ...this.props } />;
    }
  }
  
  Authentication.propTypes = {
    isAuthenticated: PropTypes.bool
  }
    
  const mapStateToProps = ({authentication}) => {
    return { isAuthenticated: authentication.isAuthenticated };
  }
  
  return connect(mapStateToProps)(Authentication);
}