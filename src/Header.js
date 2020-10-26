import React, { Component } from 'react'
import Logo from './Logo.js'
import Icon from './Icons.js'
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='header-title'>
                    <Logo />
                    <ul id='logo-list'>
                        <Icon
                            href='https://www.facebook.com/'
                            src='lab-assets/fb-icon.png' />
                        <Icon
                            href='https://www.twitter.com/"'
                            src='lab-assets/twit-icon.png' />
                        <Icon
                            href='https://en.wikipedia.org/wiki/Google%2B'
                            src='lab-assets/gp-icon.png' />
                        <Icon
                            href='https://www.instagram.com/'
                            src='lab-assets/insta-icon.png' />
                        <Icon
                            href='https://www.flickr.com/'
                            src='lab-assets/flic-icon.png' />
                        <Icon
                            href='https://www.pinterest.com/'
                            src='./lab-assets/pint-icon.png' />
                        <Icon
                            href='https://en.wikipedia.org/wiki/RSS'
                            src='lab-assets/rss-icon.png' />
                        <Icon
                            href='https://en.wikipedia.org/wiki/Email'
                            src='lab-assets/mail-icon.png' />
                    </ul>
                </div>
            </header>
        )
    }
}
