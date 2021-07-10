import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Logger, { logger } from 'redux-logger';
import reducer from './reducers';

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

export default store;