import { combineReducers } from 'redux';
import currentUser from './authentication/current_user_reducer';
import isAuthenticated from './authentication/is_authenticated_reducer';
import sign_in_error from './authentication/sign_in_error_reducer';
import sign_up_error from './authentication/sign_up_error_reducer';

const authentication = combineReducers({
  currentUser,
  isAuthenticated,
  sign_in_error,
  sign_up_error
});

export default authentication;