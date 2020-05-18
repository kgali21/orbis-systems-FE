import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const SymbolRequestForm = () => {
    const dispatch = useDispatch();
    const [symbol, setSymbol] = useState('');

    

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={symbol} onChange={({target}) => setSymbol(target.value)} maxLength='5' placeholder="Add or Remove a Symbol" />
            <button>Add/Remove</button>
        </form>
    )
};

export default SymbolRequestForm;