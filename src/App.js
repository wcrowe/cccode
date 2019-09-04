// @flow
import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {addUser} from './actions';
//import { createStore } from 'redux';
//import rootReducer from './reducers';
//import {UserContainer} from './UserContainer';
// import {grid } from './grid';
import AddUser from './AddUser';
// import { Provider } from 'unstated';
//import Users from "./view/Users";
import { Container } from "semantic-ui-react";
import { GlobalHooksProvider, createGlobalHook, useGlobalHook } from '@devhammed/use-global-hook'


import userStateHook from './store';

//const userContainer = new UserContainer();  
function App() {
  //const store = createStore(rootReducer)
  //let d = Date(Date.now());
//  store.subscribe(() => console.log(store.getState()))

  //console.log(store.getState());
 

    //const user = {userid: 1, name:'Will',city:'Tampa',date:'2019/08/01'};
    //store.dispatch(addUser(user));

    // userContainer.addUser({name:'Will',city:'Tampa',date:d});
    // console.log(userContainer);
  
 
  return (
    <GlobalHooksProvider hooks={[ userStateHook ]}>
  <h1>React Hooks Context Demo</h1>
  {/* <Counter /> */}
  {/* <Users /> */}
  <AddUser/>
  </GlobalHooksProvider>
  )
}

export default App;
