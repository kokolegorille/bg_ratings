import * as types from '../../actions/action_types';

import initialState from '../initial_state';

const list = (state = initialState.users.list, action) => {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.payload
          
    default:
      return state;
  }
};

export default list;