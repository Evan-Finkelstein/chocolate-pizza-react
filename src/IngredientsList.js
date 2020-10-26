import React, { Component } from 'react'
import Ingredient from './Ingredient.js';
import Data from './data/data.js';



export default class IngredientsList extends Component {
    render() {
        let ingredients = Data.map(createIngredient);
        return (
            <div className="ingredients-list" style={{ backgroundImage: 'url(lab-assets/list-bg.png)' }} >
                {ingredients};
            </div>
        )
    }
}

function createIngredient(object) {
    return <Ingredient key={object.key} amount={object.amount} name={object.name} />;
}
