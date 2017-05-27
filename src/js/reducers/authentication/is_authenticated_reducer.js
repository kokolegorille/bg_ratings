import * as types from '../../actions/action_types';

import initialState from '../initial_state';

const isAuthenticated = (state = initialState.authentication.isAuthenticated, action) => {
  switch (action.type) {
    case types.SIGNIN_USER_SUCCESS:
    case types.SIGNUP_USER_SUCCESS:
      return true;
      
    case types.SIGNOUT_USER_SUCCESS:
      return false;
    
    default:
      return state;
  }
};

export default isAuthenticated;