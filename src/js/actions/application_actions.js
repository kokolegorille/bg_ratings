import firebase from 'firebase';

import Api from '../utils/firebase_api';

import * as types from './action_types';

const sendDispatch = (dispatch, type, payload) => (dispatch({
  type: type,
  payload: payload
}));

export const appBootup = (bootupTime) => {
  Api.initialize();
  
  return (dispatch => {
    sendDispatch(dispatch, types.APP_BOOTUP, bootupTime);
    
    // Try to reload authentication state after initialize!
    firebase.auth().onAuthStateChanged(user => {
      if (user) sendDispatch(dispatch, types.SIGNIN_USER_SUCCESS, {user: user});
    });
  });
};
