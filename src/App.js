import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from "redux-thunk";

import rootReducer from './redux'
import Routes from './Routes'

import './App.css'

export const store = createStore(rootReducer, applyMiddleware(thunk))
function App () {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Routes />
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
