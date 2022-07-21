import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
const Context = createContext(null)
export const data = {name:'ihsaan',age:20}

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={data}>

    <App />
    </Context.Provider>
  </React.StrictMode>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

