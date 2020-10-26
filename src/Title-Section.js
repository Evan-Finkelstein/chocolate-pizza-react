
import React, { Component } from 'react'

export default class TitleSection extends Component {
    render() {
        return (
            <section id="title-section">
                <div id="title-div">
                    <h2 id='title'>
                        Chocolate Pizza
                    </h2>
                    <h3 id='pub-date'>
                        POSTED ON 15 DEC 2013 / DESSERTS
                    </h3>
                </div>
                <span id='print-link'>
                    <img id='print-icon' src='./lab-assets/print-icon.png' />
                    <p id='print'>Print</p>
                </span>
            </section>
        )
    }
}
