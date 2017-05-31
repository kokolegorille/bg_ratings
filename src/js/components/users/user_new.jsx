import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt, Link } from 'react-router-dom';

import { createUser } from '../../actions/users_actions';
import { renderField } from '../form_builder';

class UserNew extends Component {
  handleFormSubmit({first_name, last_name}) {
    const history = this.props.history;
    this.props.createUser({first_name, last_name, history});
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
      dirty,
      submitSucceeded,
      fields: {first_name, password}
    } = this.props;
    
    // Prompt usage depends on redux-form state
    // http://redux-form.com/6.7.0/docs/api/Props.md/ 
    
    return(
      <div>
        <h1>New user</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name='first_name' component={renderField} type='text' placeholder='First name' label='First name' autoFocus={true} />
          <Field name='last_name' component={renderField} type='text' placeholder='Last name' label='Last name' />
          {this.renderAlert()}
          
          <Prompt
            when={dirty && ! submitSucceeded}
            message="Data will be lost!" />
          
          <div>
            <button type='submit' disabled={pristine || submitting}>Create user</button>
            <Link to="/users">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

UserNew.propTypes = {
  createUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

// Form validation
const validate = (values) => {
  const errors = {};
  if (!values.first_name) errors.first_name = 'First name cannot be blank';
  if (!values.last_name) errors.last_name = 'Last name cannot be blank';
  return errors;
}

// Connect functions
const mapStateToProps = (state) => ({errorMessage: state.users.create_error});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'newUser',
    fields: ['first_name', 'last_name'],
    validate
  })(UserNew)
);
