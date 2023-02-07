import React, { Component } from "react";
import { Feedback } from "./Statistics.styled";

export class Statistics extends Component {
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