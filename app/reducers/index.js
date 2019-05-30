import { combineReducers } from 'redux';
import CampusReducer  from './Campus';

const rootReducers = combineReducers({
  campuses: CampusReducer
});

export default rootReducers;
