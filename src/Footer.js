import React, { Component } from 'react'
import Author from './Author.js';
import ShareButton from './ShareButton.js';
import BottomHR from './BottomHR.js';
import CopywriteInfo from './CopywriteInfo.js';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Author />
                <BottomHR />
                <CopywriteInfo />
            </footer>
        )
    }
}
