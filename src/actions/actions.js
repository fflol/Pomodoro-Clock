export const INCRE_SESSION = 'INCRE_SESSION'
export const increSession = () => {
    return {
        type: INCRE_SESSION
    }
}

export const DECRE_SESSION = 'DECRE_SESSION'
export const decreSession = () => {
    return {
        type: DECRE_SESSION
    }
}

export const INPUT_SESSION = 'INPUT_SESSION'
export const inputSession = (value) => {
    return {
        type: INPUT_SESSION,
        value
    }
}

export const INCRE_BREAK = 'INCRE_BREAK'
export const increBreak = () => {
    return {
        type: INCRE_BREAK
    }
}

export const DECRE_BREAK = 'DECRE_BREAK'
export const decreBreak = () => {
    return {
        type: DECRE_BREAK
    }
}

export const INPUT_BREAK = 'INPUT_BREAK'
export const inputBreak = (value) => {
    return {
        type: INPUT_BREAK,
        value
    }
}

export const SWITCH_LABLE = 'SWITCH_LABLE'
export const switchLable = () => {
    return {
        type: SWITCH_LABLE
    }
}

export const SET_TIMER = 'SET_TIMER'
export const setTimer = (value) => {
    return {
        type: SET_TIMER,
        value
    }
}

export const SWITCH_RUNNING = 'SWITCH_RUNNING'
export const switchRunning = () => {
    return {
        type: SWITCH_RUNNING
    }
}

export const RESET = 'RESET'
export const reset = () => {
    return {
        type: RESET
    }
}

export const PASS_TIMER_ID = 'PASS_TIMER_ID'
export const passTimerID = (value) => {
    return {
        type: PASS_TIMER_ID,
        value
    }
}

