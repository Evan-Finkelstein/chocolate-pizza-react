import React, { Component } from 'react'
import MainImage from './MainImage.js';
import TitleSection from './Title-Section.js';
import Instructions from './Instructions.js';
import IngredientsList from './IngredientsList.js';


export default class Body extends Component {
    render() {
        return (
            <div>
                <TitleSection />
                <MainImage />
                <Instructions />
                <IngredientsList />
            </div>
        )
    }
}
