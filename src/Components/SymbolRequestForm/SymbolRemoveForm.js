import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeSymbol } from '../../actions/symbolActions';
import styles from './RemoveForm.module.css';

const SymbolRemoveForm = () => {
    const dispatch = useDispatch();
    const [symbol, setSymbol] = useState('');

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(removeSymbol(symbol))
    }


    return (  
    <div>
        <form onSubmit={handleDelete}  className={styles.RemoveForm}>
            <p>$</p><input type="text" value={symbol} onChange={({target}) => setSymbol(target.value)} maxLength='5' placeholder="Remove a symbol" />
            <button>Remove</button>
        </form>
    </div>
    )
};

export default SymbolRemoveForm;