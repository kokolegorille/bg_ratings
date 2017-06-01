import * as types from '../../actions/action_types';

import initialState from '../initial_state';

const UpdateError = (state = initialState.users.update_error, action) => {
  switch (action.type) {
    case types.UPDATE_USER_SUCCESS:
      return null;
      
    case types.UPDATE_USER_ERROR:
      return action.payload;
    
    default:
      return state;
  }
};

export default UpdateError;