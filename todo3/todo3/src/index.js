import React from 'react';
import ReactDOM from 'react-dom';
import ToDos from './ToDos';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import todos from './ToDo'
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';
import  ToDoConatainer from "./ToDoContainer"

const store = createStore(todos, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToDoConatainer ></ToDoConatainer >
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
