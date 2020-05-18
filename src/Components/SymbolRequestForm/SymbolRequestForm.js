import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSymbol } from '../../actions/symbolActions';

const SymbolRequestForm = () => {
    const dispatch = useDispatch();
    const [symbol, setSymbol] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSymbol(symbol))
    }

    return (  
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={symbol} onChange={({target}) => setSymbol(target.value)} maxLength='5' placeholder="Add a Symbol" />
            <button>Add Symbol</button>
        </form>
    </div>
    )
};

export default SymbolRequestForm;