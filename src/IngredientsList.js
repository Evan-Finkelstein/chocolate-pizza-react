import React, { Component } from 'react'
import Ingredient from './Ingredient.js';

export default class IngredientsList extends Component {
    render() {
        return (
            <div class="ingredients-list" style={{ backgroundImage: 'url(lab-assets/list-bg.png)' }} >
                <div>
                    <Ingredient amount="1/2 cup" name="mascarpone" />
                    <Ingredient amount="1/2 tsp" name="pink salt" />
                    <Ingredient amount="1 lb" name="Black Mission Figs" />
                    <Ingredient amount="1/2 cup" name="brown sugar" />
                    <Ingredient amount="2-4 tbsp" name="water" />
                </div >
                <div>
                    <Ingredient amount="1 1/2 cups" name="heavy cream" />
                    <Ingredient amount="1/3 cup" name="granulated sugar" />
                    <Ingredient amount="2" name="egg yolks" />
                    <Ingredient amount="1" name="lemon, juiced" />
                    <Ingredient amount="2 tbsp" name="butter" />
                    <Ingredient amount="1 cup" name="honey roasted pecans, chopped" />
                </div >
            </div>
        )
    }
}
