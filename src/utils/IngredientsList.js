import React, { Component } from 'react'
import Ingredient from './Ingredient.js';
import Data from '../data/data.js';



export default class IngredientsList extends Component {
    render() {
        return (
            <div className="ingredients-list" style={{ backgroundImage: 'url(lab-assets/list-bg.png)' }} >

                {Data.map((object) => {
                    return <Ingredient key={object.key} amount={object.amount} name={object.name} />;
                })}

            </div>
        )
    }
}
