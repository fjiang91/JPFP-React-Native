import { combineReducers } from 'redux';
import CampusReducer  from './Campus';
import StudentReducer from './Student'

const rootReducers = combineReducers({
  campuses: CampusReducer,
  students: StudentReducer
});

export default rootReducers;
