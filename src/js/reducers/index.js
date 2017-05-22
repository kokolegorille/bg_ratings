// https://github.com/reactjs/react-router-redux
// Keep routing info inside state, to allow time travel
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const reduxApp = combineReducers({
  // System
  form,
  router: routerReducer
});

export default reduxApp;