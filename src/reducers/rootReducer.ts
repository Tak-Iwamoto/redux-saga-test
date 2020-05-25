import { combineReducers } from 'redux';
import video from './videoReducer';

export const rootReducer = combineReducers({
  video,
});
