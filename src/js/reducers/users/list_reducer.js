import * as types from '../../actions/action_types';

import initialState from '../initial_state';

const list = (state = initialState.users.list, action) => {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.payload
    
    case types.UPDATE_USER_SUCCESS:
      const {id, first_name, last_name} = action.payload;
      
      // Note dynamic key in assignment in JS hash!
      // https://stackoverflow.com/questions/19837916/creating-object-with-dynamic-keys
      const updated_record = {[id]: {first_name, last_name}};
      
      return Object.assign({}, state, updated_record);
      
    default:
      return state;
  }
};

export default list;