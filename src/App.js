import React from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import CheckboxList from './components/CheckboxList/CheckboxList';

const App = props => {
    return (
        <>
            <Ingredients />
            <CheckboxList />
        </>
    );
};

export default App;
