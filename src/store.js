import { useReducer } from "react";
import _ from "lodash";

import { GlobalHooksProvider, createGlobalHook, useGlobalHook } from '@devhammed/use-global-hook'


const initialState = {
  users: [
    // {
    //   // id: "001",
    //   // name: "Will Crowe",
    //   // city: "Tampa",
    //   // dateaddded: '2019/08/22'
    // }
  ],
  loading: false,
  error: null
};

// Pure reducer definition
const reducer  = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload]
      };
    case "DEL_USER":
      return {
        users: state.users.filter(user => user.id != action.payload)
      };
    case "START":
      return {
        loading: true
      };
    case "COMPLETE":
      return {
        loading: false
      };
    default:
      throw new Error();
  }
};

// Custom hook definition that contains your state, dispatcher and actions
const userStateHook = createGlobalHook(/** 1 **/ 'userStore', () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users, loading } = state;
  const addUser = (name, city) => {
    dispatch({
      type: "ADD_USER",
      payload: { id: _.uniqueId(10), name, city }
    });
  };
  const delUser = id => {
    dispatch({
      type: "DEL_USER",
      payload: id
    });
  };
  return { users, loading, addUser, delUser };
})

// Share custom hook
export default userStateHook;
