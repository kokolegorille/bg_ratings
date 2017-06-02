import * as types from '../../actions/action_types';

import initialState from '../initial_state';

const list = (state = initialState.users.list, action) => {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.payload
        
    // Note dynamic key in assignment in JS hash!
    // https://stackoverflow.com/questions/19837916/creating-object-with-dynamic-keys
    case types.UPDATE_USER_SUCCESS:
      const {id, first_name, last_name} = action.payload;  
      
      // Find the index position of the updated element
      const foundIndex = state.findIndex(obj => obj.id === id);
      
      const left = state.slice(0, foundIndex);  // left of foundIndex
      
      // merge left + updated object + right
      const new_state = left.concat(
        [action.payload].concat(
          state.slice(foundIndex + 1) // right of foundIndex
        )
      );
      return new_state;
    
    case types.DELETE_USER_SUCCESS:
      return state.filter(obj => obj.id !== action.payload);
      
    default:
      return state;
  }
};

export default list;