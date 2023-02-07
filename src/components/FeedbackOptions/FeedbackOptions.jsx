import React, { Component } from "react";
import { Options } from "./FeedbackOptions.styled";
 
export class FeedbackOptions extends Component {
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