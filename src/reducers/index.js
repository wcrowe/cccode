import { ADD_USER, UPDATE_USER, DELETE_USER} from '../constants';
import user from './user';
import { combineReducers } from 'redux';
const initialState = {
    users: []
  };

  const rootReducer = combineReducers({
    user
    
  });

  export default rootReducer;