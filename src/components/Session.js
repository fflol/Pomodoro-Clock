import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

import { increSession, decreSession, inputSession } from '../actions/actions'


const Session = ({ sessionLength, increSession, decreSession, inputSession }) => {

    const style = {
        margin: '10px'
    }

    return (
        <div>
            <Fab
                size="small"
                onClick={decreSession}
                aria-label="decrease"
                style={style}
            >
                <RemoveIcon />
            </Fab>

            <TextField
                onChange={inputSession}
                value={sessionLength}
                variant="outlined"
                label="Break Length"
                InputProps={{
                    startAdornment: <InputAdornment position="start">Minutes</InputAdornment>,
                }}
                margin="dense"
            />

            <Fab
                size='small'
                onClick={increSession}
                aria-label='increase'
                style={style}
            >
                <AddIcon />
            </Fab>
        </div>
    )
}

Session.propTypes = {
    sessionLength: PropTypes.string,
    increSession: PropTypes.func,
    decreSession: PropTypes.func,
    inputSession: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        sessionLength: state.sessionLength
    }
}

const mapDispatchToProps = {
    increSession,
    decreSession,
    inputSession: e => inputSession(e.target.value)
}


export default connect(mapStateToProps, mapDispatchToProps)(Session)