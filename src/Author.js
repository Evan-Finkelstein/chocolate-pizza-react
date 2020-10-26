import React, { Component } from 'react'
import ShareButton from './ShareButton.js';

export default class Author extends Component {
    render() {
        return (
            <div className="author">
                <img src="/lab-assets/van-pic.png" class="author-image" alt="" />
                <div>
                    <h3>Vanessa Stevenson</h3>
                    <p class="bio"> Food enthusiast, photogrophy fan. Add a pinch of raw foodism and thats pretty much who I am.</p>
                </div>
                <ShareButton />
            </div>
        )
    }
}
