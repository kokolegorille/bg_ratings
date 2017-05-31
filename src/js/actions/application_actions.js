import firebase from 'firebase';

import Api from '../utils/firebase_api';

import * as types from './action_types';

const sendDispatch = (dispatch, type, payload) => (dispatch({
  type: type,
  payload: payload
}));

// Firebase initialize is done here!
// It also includes an auth state observable 
export const appBootup = (bootupTime) => {
  Api.initialize();
  
  return (dispatch => {
    sendDispatch(dispatch, types.APP_BOOTUP, bootupTime);
    
    // Reload authentication state after initialize
    // This be triggered each time auth state change! 
    firebase.auth().onAuthStateChanged(user => {
      if (user) sendDispatch(dispatch, types.SIGNIN_USER_SUCCESS, {user: user});
      else sendDispatch(dispatch, types.SIGNOUT_USER_SUCCESS, null);
    });
  });
};
