import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'

import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { switchLable, switchRunning, reset } from '../actions/actions'
import { useInterval } from '../hooks/hooks'
import { ringURL } from '../config/config'


const Timer = ({
    timerIsSession,
    sessionLength,
    breakLength,
    running,
    switchRunning,
    switchLable,
    reset }) => {

    const [timer, setTimer] = useState((timerIsSession 
        ? sessionLength 
        : breakLength) * 60 * 1000)
    const audio = useRef()
    const handleReset = () => {
        reset()
        setTimer((timerIsSession ? sessionLength : breakLength) * 60 * 1000)
        audio.current.pause()
        audio.current.load()
    }

    useInterval(() => {
        setTimer(prevTimer => prevTimer - 1000)
    }, running ? 1000 : null)
    
    useEffect(() => {
        if (timer === 0) {
            switchLable()
            audio.current.play()
        }
    }, [timer, switchLable])
    
    useEffect(() => {
        setTimer((timerIsSession ? sessionLength : breakLength) * 60 * 1000)
    }, [timerIsSession, sessionLength, breakLength])

    return (
        <div>

            <Typography variant="h3" gutterBottom>
                {timerIsSession ? 'Session' : 'Break'}
            </Typography>

            <Typography variant="h3" gutterBottom>
                {moment(timer).format('mm:ss')}
            </Typography>

            <Grid container spacing={3}>

                <Grid item>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={switchRunning}
                    >
                        play/pause
                </Button>
                </Grid>

                <Grid item>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={handleReset}
                    >
                        reset
                    </Button>
                </Grid>

            </Grid>

            <audio
                src={ringURL}
                ref={node => audio.current = node}
            />

        </div>
    )
}

Timer.propTypes = {
    timerIsSession: PropTypes.bool,
    sessionLength: PropTypes.number,
    breakLength: PropTypes.number,
    running: PropTypes.bool,
    switchRunning: PropTypes.func,
    switchLable: PropTypes.func,
    reset: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        breakLength: parseInt(state.breakLength),
        sessionLength: parseInt(state.sessionLength),
        timerIsSession: state.timerIsSession,
        running: state.running
    }
}

const mapDispatchToProps = {
    switchLable,
    switchRunning,
    reset,
}


export default connect(mapStateToProps, mapDispatchToProps)(Timer)


