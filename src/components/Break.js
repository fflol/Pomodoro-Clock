import React from 'react'
import { connect } from 'react-redux'

import { increBreak, decreBreak, inputBreak } from '../actions/actions'

const Break = ({ breakLength, increBreak, decreBreak, inputBreak }) => {
    return (
        <div>
            <h3>Break Length</h3>
            <button onClick={decreBreak}>-</button>
            <input
                type="number"
                max='10'
                min='1'
                onChange={inputBreak}
                value={breakLength}
            />
            <button onClick={increBreak}>+</button>
            {breakLength === 'invalid' && <p>invalid, re-enter</p>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        breakLength: state.breakLength
    }
}

const mapDispatchToProps = {
    increBreak,
    decreBreak,
    inputBreak: e => inputBreak(e.target.value)
}


export default connect(mapStateToProps, mapDispatchToProps)(Break)