import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reduxApp from './reducers';
// import socketMiddleware from './middlewares/socket_middleware';
// import urlChangerMiddleware from './middlewares/url_changer_middleware';

const configureStore = (routerMiddleware) => {
  // const middlewares = [routerMiddleware, reduxThunk, socketMiddleware, urlChangerMiddleware];
  const middlewares = [routerMiddleware, reduxThunk];
  
  let composeEnhancers;
  
  // TODO: CHANGE SETUP FOR WEBPACK 2!
  
  // if (!__PRODUCTION__) {
  //   // Add Logger middleware in development mode
  //   middlewares.push(createLogger());
  //
  //   // Allow Redux Dev Tools in development mode
  //   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // } else {
  //   composeEnhancers = compose;
  // }
  
  middlewares.push(createLogger());
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  // composeEnhancers = compose;
    
  const store = createStore(
    reduxApp,
    composeEnhancers(applyMiddleware(...middlewares))
  )
    
  return store;
}

export default configureStore;
