import React from 'react'
import { Provider } from 'react-redux'

import Break from './components/Break'
import Session from './components/Session'
import Timer from './components/Timer'
import { store } from './store/store'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <main>
        <Break />
        <Session />
        <Timer />
      </main>
    </Provider>
  )
}

export default App
