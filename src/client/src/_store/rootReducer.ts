import { combineReducers } from 'redux';
import countReducer from './ducks/count';

const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;
