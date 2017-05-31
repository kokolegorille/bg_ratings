import firebase from 'firebase';

import Api from '../utils/firebase_api';

import * as types from './action_types';

const sendDispatch = (dispatch, type, payload) => (dispatch({
  type: type,
  payload: payload
}));

// NOTE : SIGN_IN SIGN_OUT actions are dispatched from 
//        application_actions as an observer of auth state.

// THUNK
export const signinUser = ({email, password, history}) => {
  return (dispatch => {
    sendDispatch(dispatch, types.SIGNIN_USER_REQUEST, {email, password});
    
    Api.sign_in(email, password)
      .then(() => history.push('/'))
      .catch(error => sendDispatch(dispatch, types.SIGNIN_USER_ERROR, error.toString()));
  });
};

// THUNK
export const signoutUser = () => () => Api.sign_out();