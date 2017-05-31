import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signinUser } from '../../actions/sign_actions';
import { renderField } from '../form_builder';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    const history = this.props.history;
    this.props.signinUser({email, password, history});
  }
  
  renderAlert() {
    const {errorMessage} = this.props;
    if(errorMessage) {
      return(
        <strong>{errorMessage}</strong>
      );
    }
  }
  
  render() {
    const {
      handleSubmit, 
      pristine, 
      submitting,
      fields: {email, password}
    } = this.props;
    
    return(
      <div>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name='email' component={renderField} type='text' placeholder='Email' label='Email' autoFocus={true} />
          <Field name='password' component={renderField} type='password' placeholder='Password' label='Password' />
          {this.renderAlert()}
          <div>
            <button type='submit' disabled={pristine || submitting}>Sign in</button>
          </div>
        </form>
      </div>
    );
  }  
}

Signin.propTypes = {
  signinUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

// Form validation
const validate = (values) => {
  const errors = {};
  if (!values.email) errors.email = 'Email cannot be blank';
  if (!values.password) errors.password = 'Password cannot be blank';
  return errors;
}

// Connect functions
const mapStateToProps = (state) => ({errorMessage: state.authentication.sign_in_error});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signinUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'signin',
    fields: ['email', 'password'],
    validate
  })(Signin)
);
