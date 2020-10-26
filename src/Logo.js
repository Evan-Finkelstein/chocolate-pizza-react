import React, { Component } from 'react'

export default class Logo extends Component {
    render() {
        return (
            <div id='logo'>
                <img src="lab-assets/logo.png" alt="delicious logo" id="logo-img"></img>
                <p id='delicious'>Delicious</p>
                <p id='logo-tag'>THE BEST FOOD BLOG ON THE WEB </p>
            </div>
        )
    }
}
