import React from 'react';
import logo from './logo.svg';
import './App.css';
import {addUser} from './actions';
import { createStore } from 'redux';
import rootReducer from './reducers'

function App() {
  const store = createStore(rootReducer)
  store.subscribe(() => console.log(store.getState()))
  
  console.log(store.getState());
  const addUserHandler = (e) => {
    e.preventDefault();
    const user = {name:'Will',city:'Tampa',date:'2019/08/01'};
    store.dispatch(addUser(user));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <button value="Add" onClick={addUserHandler}></button>

    </div>
  );
}

export default App;
