import React, { useState } from 'react';
import Card from '../UI/Card';
import allItems from '../../data/items.json';
import classes from './CheckboxList.module.css';

const CheckboxList = (props) => {
    const netItems = allItems
    const [data, setData] = useState(netItems);
    const [selectedItems, setSelectedItems] = useState({});
    const removeHandler = (event) => {
        event.preventDefault();
        const elem = event.target.value;
        const filteredItems = data.items.filter((item) => item !== elem)
        setSelectedItems(prevItems => {
            delete prevItems[elem];
            return prevItems;
        });
        setData({ "items": filteredItems });
    };
    const changeHandler = (event) => {
        setSelectedItems(prevItems => {
            return { ...prevItems, [event.target.value]: event.target.checked}
        })
    };
    return (
        <section className="ingredient-form">
            <Card>
                {data.items.map((item, index) => {
                    return (
                        <div className={classes.items} key={index}>
                            <Card>
                                <input
                                    type="checkbox"
                                    value={item}
                                    onChange={(e) => changeHandler(e)}
                                    checked={selectedItems[item] === true}
                                />
                                {item}
                                {selectedItems[item] === true &&
                                    <button className={classes.deleteButton} value={item} onClick={(e)=> removeHandler(e)}>Remove</button>}
                            </Card>
                        </div>
                    );
                })}
            </Card>
        </section>
    );
}

export default CheckboxList;