import React, { Component } from "react";
import PropTypes from 'prop-types'

import { Feedback } from "./Statistics.styled";


export class Statistics extends Component {
    
    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positive: PropTypes.number.isRequired,
    }

    render () {
    const {good, neutral, bad, total, positive} = this.props
        return(
            <Feedback>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p> 
                <p>Bad: {bad}</p> 
                <p>Total: {total}</p>
                <p>Positive Feedback: {positive}%</p>
            </Feedback>
        )
    }
}