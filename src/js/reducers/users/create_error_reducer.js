import * as types from '../../actions/action_types';

import initialState from '../initial_state';

const CreateError = (state = initialState.users.create_error, action) => {
  switch (action.type) {
    case types.CREATE_USER_SUCCESS:
      return null;
      
    case types.CREATE_USER_ERROR:
      return action.payload;
    
    default:
      return state;
  }
};

export default CreateError;