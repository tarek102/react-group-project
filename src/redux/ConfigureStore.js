import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missions from './mission/mission';
import rockets from './rockets/rockets';

const reducer = combineReducers({
  missions,
  rockets,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
