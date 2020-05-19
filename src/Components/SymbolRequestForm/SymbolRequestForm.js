import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSymbol } from '../../actions/symbolActions';
import styles from './RequestForm.module.css';

const SymbolRequestForm = () => {
    const dispatch = useDispatch();
    const [symbol, setSymbol] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSymbol(symbol))
    }

    return (  
    <div>
        <form onSubmit={handleSubmit} className={styles.RequestForm}>
            <p>$</p><input type="text" value={symbol} onChange={({target}) => setSymbol(target.value)} maxLength='5' placeholder="Add a Symbol" />
            <button>Add</button>
        </form>
    </div>
    )
};

export default SymbolRequestForm;