import { combineReducers } from 'redux'

import { INCRE_SESSION, DECRE_SESSION, INCRE_BREAK, DECRE_BREAK, INPUT_SESSION, INPUT_BREAK, SWITCH_LABLE, SET_TIMER, SWITCH_RUNNING, PASS_TIMER_ID } from '../actions/actions'

const sessionLength = (state = 5, action) => {
    switch (action.type) {
        case INCRE_SESSION:
            if (state === 60) return 60
            return state + 1
        case DECRE_SESSION:
            if (state === 10) return 10
            return state - 1
        case INPUT_SESSION:
            if (60 < action.value || action.value < 1) return 'invalid'
            return parseInt(action.value)
        default:
            return state
    }
}

const breakLength = (state = 3, action) => {
    switch (action.type) {
        case INCRE_BREAK:
            if (state === 10) return 10
            return state + 1
        case DECRE_BREAK:
            if (state === 1) return 1
            return state - 1
        case INPUT_BREAK:
            if (10 < action.value || action.value < 1) return 'invalid'
            return parseInt(action.value)
        default:
            return state
    }
}

const timerIsSession = (state = true, action) => {
    switch (action.type) {
        case SWITCH_LABLE:
            return !state
        default:
            return state
    }
}

const timer = (state = 0, action) => {
    switch (action.type) {
        case SET_TIMER:
            return action.value
        default:
            return state;
    }
}

const running = (state = false, action) => {
    switch (action.type) {
        case SWITCH_RUNNING:
            return !state
        default:
            return state
    }
}

const timerID = (state = 0, action) => {
    switch (action.type) {
        case PASS_TIMER_ID:
            return action.value
        default:
            return state
    }
}

export const combinedReducer = combineReducers({ sessionLength, breakLength, timerIsSession, timer, running, timerID }) 