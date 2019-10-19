import { combineReducers } from 'redux'

import { INCRE_SESSION, DECRE_SESSION, INCRE_BREAK, DECRE_BREAK, INPUT_SESSION, INPUT_BREAK, SWITCH_LABLE, SWITCH_RUNNING, RESET } from '../actions/actions'


const sessionLength = (state = '25', action) => {
    switch (action.type) {
        case INCRE_SESSION:
            if (parseInt(state) === 60) return '60'
            if (state.match(/\D/g)) return '1'
            return (parseInt(state) + 1).toString()
        case DECRE_SESSION:
            if (parseInt(state) === 1) return '1'
            if (state.match(/\D/g)) return '1'
            return (parseInt(state) - 1).toString()
        case INPUT_SESSION:
            if (60 < parseInt(action.value) || parseInt(action.value) < 1) return 'invalid'
            if (action.value.match(/\D/g)) return '1'
            return action.value
        case RESET:
            return '25'
        default:
            return state
    }
}

const breakLength = (state = '5', action) => {
    switch (action.type) {
        case INCRE_BREAK:
            if (parseInt(state) >= 10) return '10'
            if (state.match(/\D/g)) return '1'
            return (parseInt(state) + 1).toString()
        case DECRE_BREAK:
            if (parseInt(state) <= 1) return '1'
            if (state.match(/\D/g)) return '1'
            return (parseInt(state) - 1).toString()
        case INPUT_BREAK:
            if (10 < parseInt(action.value) || parseInt(action.value) < 1) return 'invalid'
            if (action.value.match(/\D/g)) return '1'
            return action.value
        case RESET:
            return '5'
        default:
            return state
    }
}

const timerIsSession = (state = true, action) => {
    switch (action.type) {
        case SWITCH_LABLE:
            return !state
        case RESET:
            return true
        default:
            return state
    }
}

const running = (state = false, action) => {
    switch (action.type) {
        case SWITCH_RUNNING:
            return !state
        case RESET:
            return false
        default:
            return state
    }
}

export const combinedReducer = combineReducers({ sessionLength, breakLength, timerIsSession, running }) 