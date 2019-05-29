import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger';

export default createStore(rootReducer, applyMiddleware(loggingMiddleware));
