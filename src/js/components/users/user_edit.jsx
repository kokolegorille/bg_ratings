import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt, Link } from 'react-router-dom';

import { updateUser } from '../../actions/users_actions';
import { renderField } from '../form_builder';

class UserEdit extends Component {
  componentDidMount() {
    const user = this._userById();
    
    // Load value into redux-form
    // https://www.davidmeents.com/blog/create-redux-form-validation-initialized-values/
    this.props.initialize(user);
  }
  
  handleFormSubmit({first_name, last_name}) {
    const history = this.props.history;
    const {id} = this.props.match.params;
    this.props.updateUser(id, {first_name, last_name, history});
  }

  renderAlert() {
    const {errorMessage} = this.props;
    if(errorMessage) {
      return(
        <strong>{errorMessage}</strong>
      );
    }
  }
  
  _userById() {
    const {id} = this.props.match.params;
    return this.props.list.filter(obj => obj.id === id)[0];
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
    
    const {id} = this.props.match.params;
    
    // Load user data by id from state
    const user = this._userById();
    
    if (! user) return <p>Loading...</p>;
    
    const full_name = `${user.first_name} ${user.last_name}`;
    
    // Prompt usage depends on redux-form state
    // http://redux-form.com/6.7.0/docs/api/Props.md/ 
    
    return(
      <div>
        <h1>Edit {full_name}</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name='first_name' component={renderField} type='text' placeholder='First name' label='First name' autoFocus={true} />
          <Field name='last_name' component={renderField} type='text' placeholder='Last name' label='Last name' />
          {this.renderAlert()}
          
          <Prompt
            when={dirty && ! submitSucceeded}
            message="Data will be lost!" />
          
          <div>
            <button type='submit' disabled={pristine || submitting}>Update user</button>
            <Link to={`/users/${id}`}>Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

UserEdit.propTypes = {
  updateUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  users: PropTypes.object
}

// Form validation
const validate = (values) => {
  const errors = {};
  if (!values.first_name) errors.first_name = 'First name cannot be blank';
  if (!values.last_name) errors.last_name = 'Last name cannot be blank';
  return errors;
}

// Connect functions
const mapStateToProps = ({users}) => ({
  errorMessage: users.update_error,
  list: users.list
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(
    {
      form: 'editUser',
      fields: ['first_name', 'last_name'],
      validate
    }
  )(UserEdit)
);
