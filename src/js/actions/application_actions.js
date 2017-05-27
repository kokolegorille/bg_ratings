import Api from '../utils/firebase_api';

import * as types from './action_types';

export const appBootup = (bootupTime) => {
  // Initialize firebase at bootup time
  Api.initialize();
  
  return ({
    type: types.APP_BOOTUP,
    payload: bootupTime
  });
};