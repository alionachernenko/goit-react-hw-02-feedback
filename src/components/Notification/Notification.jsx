import React, { Component } from "react";
import { Message } from "./Notification.styled";

export class Notification extends Component {
    render () {
    const {message} = this.props
        return (
            <Message>{message}</Message>
        )
    }
}