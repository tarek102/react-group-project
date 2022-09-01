import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missions from './mission/mission';

const reducer = combineReducers({
  missions,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
