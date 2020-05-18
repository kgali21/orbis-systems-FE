import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSymbol, removeSymbol } from '../../actions/symbolActions';

const SymbolRequestForm = () => {
    const dispatch = useDispatch();
    const [symbol, setSymbol] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSymbol(symbol))
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(removeSymbol(symbol))
        console.log(symbol)
    }


    return (  
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={symbol} onChange={({target}) => setSymbol(target.value)} maxLength='5' placeholder="Add a Symbol" />
            <button>Add Symbol</button>
        </form>
        <form onSubmit={handleDelete}>
            <input type="text" value={symbol} onChange={({target}) => setSymbol(target.value)} maxLength='5' placeholder="Remove a symbol" />
            <button>Remove</button>
        </form>
    </div>
    )
};

export default SymbolRequestForm;