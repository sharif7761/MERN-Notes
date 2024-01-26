import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import {thunk} from 'redux-thunk'

import reducers from "./reducers/index.js";

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
