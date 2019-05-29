import { combinedReducer } from 'redux';
import CampusReducers from './CampusReducer';

const rootReducers = combinedReducer({
  campuses: CampusReducers
});

export default rootReducers;
