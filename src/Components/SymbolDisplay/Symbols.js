import React, { useEffect, useState } from 'react';
import SymbolCard from './SymbolCard';
import Messages from '../Messages/Messages'
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
        <li key={data.symbol.symbol}>
            <div>
            <SymbolCard 
                symbol={data.symbol.symbol} 
                tweetCount={data.messages.length}
                tweet={
                    <Messages 
                        messages={data.messages.map(messageBody => messageBody)}
                    />
                }
            />
            </div>
        </li>
    )).slice(0, 5);

    return (
    <ul  className={styles.DataElements} >
        {dataElements}
    </ul>
    )
}

export default Symbols;