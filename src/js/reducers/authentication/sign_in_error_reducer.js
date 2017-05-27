import * as types from '../../actions/action_types';

import initialState from '../initial_state';

const SignInError = (state = initialState.authentication.sign_in_error, action) => {
  switch (action.type) {
    case types.SIGNIN_USER_SUCCESS:
    case types.SIGNUP_USER_SUCCESS:
    case types.SIGNOUT_USER_SUCCESS:
      return null;
      
    case types.SIGNIN_USER_ERROR:
      return action.payload;
    
    default:
      return state;
  }
};

export default SignInError;