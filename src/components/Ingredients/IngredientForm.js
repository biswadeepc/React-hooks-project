import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import locations from '../../data/locations';

const IngredientForm = React.memo(props => {
    const [formData, setFormData] = useState({ title: '', amount: '' });
    const submitHandler = event => {
        event.preventDefault();
        props.onAddIngredient(formData);
        setFormData({ title: '', amount: '' });
    };
    const [country, setCountry] = useState("");
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState("");

    const formDataChangeHandler = (e) => {
        setFormData(prevFormData => (
            { ...prevFormData, [e.target.name]: e.target.value }
        ));
    }

    const onChangeHandler = (event) => {
        const idx = event.target.value;
        if (idx.length > 0) {
            setCountry(idx);
            setCity("");
            setCities(locations[idx].cities);
        }
        else {
            setCountry("");
            setCity("");
            setCities([]);
            
        }
    }
    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input name="title" type="text" id="title" value={formData.title} onChange={formDataChangeHandler} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input name="amount" type="number" id="amount" value={formData.amount} onChange={formDataChangeHandler} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country" value={country} onChange={onChangeHandler}>
                            <option value="">Select country</option>
                            {locations.map((item, index) => (
                                <option key={item.value} value={index}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="city">City</label>
                        <select id="city" name="city">
                            <option value="">Select City</option>
                            {cities.length > 0 && cities.map((item, index) => (
                                <option key={index} value={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit">Add Ingredient</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});
export default IngredientForm;
