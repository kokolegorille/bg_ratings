// This file contains default application state

const initialState = {
  application: {
    bootupTime: null,
    isFetching: false
  },
  authentication: {
    isAuthenticated: false,
    currentUser: null,
    sign_in_error: null,
    sign_up_error: null
  },
  users: {
    list: {},
    create_error: null
  }
}

export default initialState;