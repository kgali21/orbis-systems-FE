import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

const SymbolRequestForm = () => {
    // const dispatch = useDispatch();

    const [symbol, setSymbol] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={symbol} onChange={({ target }) => setSymbol(target.value)} maxLength='5' placeholder="Add or Remove a Symbol" />
            <button>Add/Remove</button>
        </form>
    )
};

export default SymbolRequestForm;