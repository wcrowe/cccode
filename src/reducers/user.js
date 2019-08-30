import { ADD_USER, UPDATE_USER, DELETE_USER} from '../constants';
const user = (state = [], action) => {
    switch (action.type) {
      case ADD_USER:
        return [
          ...state,
          {
            action
          }
        ]
      default:
        return state
    }
  }
  
  export default user
  

  