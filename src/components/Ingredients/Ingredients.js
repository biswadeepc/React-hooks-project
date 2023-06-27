import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
    const [userIngredients, setUserIngredients] = useState([]);
    const addIngredientHander = (ingredient) => {
        setUserIngredients(prevUserIngredients => (
            [...prevUserIngredients, { id: Math.random().toString(), ...ingredient }]
        ))
    }

    const removeItemHandler = (id) => {
        if (!window.confirm('Are you sure to remove the item?')) {
            return false;
        }
        setUserIngredients(prevUserIngredients => (
            prevUserIngredients.filter((ig) => (ig.id !== id))
        ));
    }
    return (
        <div className="App">
            <IngredientForm onAddIngredient={addIngredientHander} />
            <section>
                <Search />
                <IngredientList ingredients={userIngredients} onRemoveItem={removeItemHandler} />
            </section>
        </div>
    );
}

export default Ingredients;
