import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

import { increBreak, decreBreak, inputBreak } from '../actions/actions'


const Break = ({ breakLength, increBreak, decreBreak, inputBreak }) => {

    const style = {
        margin: '10px'
    }

    return (
        <div>
            <Fab
                size="small"
                onClick={decreBreak}
                aria-label="decrease"
                style={style}
            >
                <RemoveIcon />
            </Fab>

            <TextField
                onChange={inputBreak}
                value={breakLength}
                variant="outlined"
                label="Break Length"
                InputProps={{
                    startAdornment: <InputAdornment position="start">Minutes</InputAdornment>,
                }}
                margin="dense"
            />

            <Fab
                size='small'
                onClick={increBreak}
                aria-label='increase'
                style={style}

            >
                <AddIcon />
            </Fab>
        </div>
    )
}

Break.propTypes = {
    breakLength: PropTypes.string,
    increBreak: PropTypes.func,
    decreBreak: PropTypes.func,
    inputBreak: PropTypes.func
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