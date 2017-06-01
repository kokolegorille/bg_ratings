import { combineReducers } from 'redux';
import list from './users/list_reducer';
import create_error from './users/create_error_reducer';
import update_error from './users/update_error_reducer';

const users = combineReducers({
  list,
  create_error,
  update_error
});

export default users;