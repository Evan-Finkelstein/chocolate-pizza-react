import React, { Component } from 'react'

export default class Icons extends Component {
    render() {
        return (
            <li>
                <a href={this.props.href}>
                    <img className='header-logos' src={this.props.src} alt='food' />
                </a>
            </li>
        )
    }
}
