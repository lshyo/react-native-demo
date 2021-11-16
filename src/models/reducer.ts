import {combineReducers} from 'redux';
import location from './reducer/location';
import user from './reducer/user';
export default combineReducers({
  location,
  user,
});
