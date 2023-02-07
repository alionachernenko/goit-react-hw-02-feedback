import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Section extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    }
    
    render() {
        const {title, children} = this.props
        return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        )
       
    }
}