import firebase from 'firebase';

import Api from '../utils/firebase_api';

import * as types from './action_types';

const sendDispatch = (dispatch, type, payload) => (dispatch({
  type: type,
  payload: payload
}));

// THUNK
export const signinUser = ({email, password, history}) => {
  return (dispatch => {
    sendDispatch(dispatch, types.SIGNIN_USER_REQUEST, {email, password});
    
    Api.sign_in(email, password)
      .then(() => {
        sendDispatch(dispatch, types.SIGNIN_USER_SUCCESS, {user: firebase.auth().currentUser});
        history.push('/');
      })
      .catch(error => sendDispatch(dispatch, types.SIGNIN_USER_ERROR, error.toString()));
    
  });
};

// THUNK
export const signoutUser = () => {
  return (dispatch => {
    Api.sign_out()
      .then(() => sendDispatch(dispatch, types.SIGNOUT_USER_SUCCESS, null));
  });
};