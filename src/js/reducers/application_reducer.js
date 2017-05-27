import { combineReducers } from 'redux';
import bootupTime from './application/bootup_time_reducer';
import isFetching from './application/is_fetching_reducer';

const application = combineReducers({
  bootupTime,
  isFetching
});

export default application;