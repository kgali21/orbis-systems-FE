import React, { useEffect, useState } from 'react';
import SymbolCard from './SymbolCard';
import { useSelector, useDispatch } from 'react-redux';
import { getSymbolObject } from '../../selectors/symbolsSelectors';
// import { updateSymbol } from '../../actions/symbolActions';
// import useInterval from '@use-it/interval';
import styles from './Symbols.module.css';

const Symbols = () => {
    // const dispatch = useDispatch();
    const symbolsItems = useSelector(getSymbolObject);
    // useInterval(() => {
    //     dispatch(updateSymbol(symbolsItems))
    // }, 10000)

    const dataElements = symbolsItems.map((data, i) => (
        <li key={data.symbol.symbol} >
            <SymbolCard symbol={data.symbol.symbol} tweet={data.messages.map(messageBody => messageBody.body).slice(0, 1)} tweetCount={data.messages.length}/>
        </li>
    )).slice(0, 5);

    return (
    <ul  className={styles.DataElements} >
        {dataElements}
    </ul>
    )
}

export default Symbols;