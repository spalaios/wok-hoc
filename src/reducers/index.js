import { combineReducers } from 'redux';
import authReducer from './auth';
import saveReducer from './saveReducer'



const rootReducer = combineReducers({
  auth: authReducer,
  comments:saveReducer
});

export default rootReducer;
