import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { switchLable, switchRunning, reset } from '../actions/actions'

const Timer = ({
    timerIsSession,
    sessionLength,
    breakLength,
    initialTimer,
    running,
    switchRunning,
    switchLable,
    reset }) => {

    const [timerID, setTimerID] = useState(0)
    const [timer, setTimer] = useState(initialTimer)

    const runPause = () => {
        if (!running && timer > 0) {
            switchRunning()
            setTimerID(
                setInterval(() => {
                    setTimer(prevTimer => prevTimer - 1)
                }, 1000)
            )
        }
        else if (running) {
            switchRunning()
            clearInterval(timerID)
        }
    }

    return (
        <div>
            <h3>{timerIsSession ? 'Session' : 'Break'}</h3>
            <h3>{timer}</h3>
            <button onClick={runPause}>play/pause</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        breakLength: state.breakLength,
        sessionLength: state.sessionLength,
        timerIsSession: state.timerIsSession,
        initialTimer: state.timerIsSession ? state.sessionLength : state.breakLength,
        running: state.running
    }
}

const mapDispatchToProps = {
    switchLable,
    switchRunning,
    reset,
}


export default connect(mapStateToProps, mapDispatchToProps)(Timer)


