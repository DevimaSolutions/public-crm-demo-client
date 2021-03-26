import { combineReducers } from 'redux';
import settings from './settings/reducers';
import authorization from './authorization/reducers';

export default combineReducers({
  settings,
  authorization,
});
