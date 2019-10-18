import React from 'react'
import { connect } from 'react-redux'

import { increSession, decreSession, inputSession } from '../actions/actions'

const Session = ({ sessionLength, increSession, decreSession, inputSession }) => {
    return (
        <div>
            <h3>Session Length</h3>
            <button onClick={decreSession}>-</button>
            <input
                type="number"
                max='60'
                min='1'
                onChange={inputSession}
                value={sessionLength}
            />
            <button onClick={increSession}>+</button>
            {sessionLength === 'invalid' && <p>invalid, re-enter</p>}
        </div>
    )
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