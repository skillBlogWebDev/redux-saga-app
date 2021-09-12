import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { alertReducer } from './alertReducer';

export const rootReducer = combineReducers({
  todosReducer,
  alertReducer,
});
