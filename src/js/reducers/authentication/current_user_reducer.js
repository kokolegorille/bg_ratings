import * as types from '../../actions/action_types';

import initialState from '../initial_state';

const currentUser = (state = initialState.authentication.currentUser, action) => {
  switch (action.type) {
    case types.SIGNUP_USER_SUCCESS:
    case types.SIGNIN_USER_SUCCESS:
      return action.payload.user;
    
    case types.SIGNOUT_USER_SUCCESS:
      return initialState.authentication.currentUser;
      
    default:
      return state;
  }
};

export default currentUser;