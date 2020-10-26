import React, { Component } from 'react'
import InlineHR from './InlineHR'

export default class BottomHR extends Component {
    render() {
        return (
            <div>
                <InlineHR />
                <img src="./lab-assets/small-logo.png" alt="" />
                <InlineHR />
            </div>
        )
    }
}
