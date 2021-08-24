import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

export let rerenderEntireTree = () => {
    ReactDOM.render(
          <BrowserRouter>
            <Provider store={store}>
              <App />
            </Provider>
          </BrowserRouter>,
        document.getElementById('root')
      );
}


/** Add OnStateChange listener, which calls render function every time state changes */
//store.subscribe(rerenderEntireTree)

/** Render DOM first time */
rerenderEntireTree()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
