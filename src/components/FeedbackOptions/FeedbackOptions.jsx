import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Options } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {

static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
    render () {
        const {options, onLeaveFeedback} = this.props
        return(
        <Options>
            {options.map((option) => (
                <button key={option} type="button" id={option} onClick={onLeaveFeedback}>{option}</button>
            ))}
        </Options>
        )
    }
}