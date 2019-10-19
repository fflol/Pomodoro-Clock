import React from 'react'
import { Provider } from 'react-redux'

import Container from '@material-ui/core/Container'

import Break from './components/Break'
import Session from './components/Session'
import Timer from './components/Timer'
import { store } from './store/store'


function App() {

  const style = {
    marginTop: '30px'
  }

  return (
    <Provider store={store}>
      <Container maxWidth="sm" style={style}>
        <main>
          <Break />
          <Session />
          <Timer />
        </main>
      </Container>
    </Provider>
  )
}

export default App
