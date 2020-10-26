import React, { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        return (
            <p> <input type="checkbox" /> {this.props.amount} {this.props.name} </p>
        )
    }
}
