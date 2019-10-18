import { createStore } from 'redux'

import { combinedReducer } from '../reducers/reducers'

// const preLoaded = {
//     sessionLength: 25,
//     breakLength: 5,
//     timerIsSession: true,
//     timer: 0,
//     running: false,
//     timerID: 0,
// }

export const store = createStore(combinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())