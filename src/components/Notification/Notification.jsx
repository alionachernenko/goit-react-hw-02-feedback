import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Message } from './Notification.styled';

export class Notification extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired
    }
    
    render () {
    const {message} = this.props
        return (
            <Message>{message}</Message>
        )
    }
}