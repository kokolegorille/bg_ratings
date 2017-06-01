import firebase from 'firebase';

import Api from '../utils/firebase_api';

import * as types from './action_types';

const sendDispatch = (dispatch, type, payload) => (dispatch({
  type: type,
  payload: payload
}));

// THUNK
export const loadUsers = () => {
  return (dispatch => {
    sendDispatch(dispatch, types.LOAD_USERS_REQUEST, null);
    
    Api.load_users()
      .then((snapshot) => sendDispatch(dispatch, types.LOAD_USERS_SUCCESS, snapshot.val()))
      .catch(error => sendDispatch(dispatch, types.LOAD_USERS_ERROR, error.toString()));
    
  });
};

// THUNK
export const createUser = ({first_name, last_name, history}) => {
  return (dispatch => {
    sendDispatch(dispatch, types.CREATE_USER_REQUEST, null);
    
    Api.create_user(first_name, last_name)
      .then(snapshot => {
        // USE SNAPSHOT.KEY TO GET NEW ID
        // https://stackoverflow.com/questions/16637035/in-firebase-when-using-push-how-do-i-pull-the-unique-id
        
        sendDispatch(dispatch, types.CREATE_USER_SUCCESS, snapshot.key);
        history.push("/users");
      })
      .catch(error => sendDispatch(dispatch, types.CREATE_USER_ERROR, error.toString()));
    
  });
};

// THUNK
export const deleteUser = (id, history) => {
  return (dispatch => {
    sendDispatch(dispatch, types.DELETE_USER_REQUEST, id);
    
    Api.delete_user(id)
      .then(() => {
        sendDispatch(dispatch, types.DELETE_USER_SUCCESS, id);
        history.push("/users");
      })
      .catch(error => sendDispatch(dispatch, types.DELETE_USER_ERROR, error.toString()));
    
  });
};

// THUNK
export const updateUser = (id, {first_name, last_name, history}) => {
  return (dispatch => {
    sendDispatch(dispatch, types.UPDATE_USER_REQUEST, id);
    
    Api.update_user(id, first_name, last_name)
      .then(() => {
        sendDispatch(dispatch, types.UPDATE_USER_SUCCESS, {id, first_name, last_name});
        history.push(`/users/${id}`);
      })
      .catch(error => sendDispatch(dispatch, types.UPDATE_USER_ERROR, error.toString()));
    
  });
};
