import React from 'react';
import './App.css';
import './styles/header.css';
import './styles/reset.css';
import './styles/ingredients-list.css';
import Header from './Header.js'
import Body from './Body.js';
import Footer from './Footer.js';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

