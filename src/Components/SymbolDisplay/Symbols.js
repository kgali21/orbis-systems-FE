import React, { useEffect, useState } from 'react';
import SymbolCard from './SymbolCard';
import { useSelector, useDispatch } from 'react-redux';
import { getSymbolObject } from '../../selectors/symbolsSelectors';
import { updateSymbol } from '../../actions/symbolActions';
import useInterval from '@use-it/interval';

const Symbols = () => {
    const dispatch = useDispatch();
    const symbolsItems = useSelector(getSymbolObject);

    useInterval(() => {
        dispatch(updateSymbol(symbolsItems))
    }, 10000)

    const dataElements = symbolsItems.map((data, i) => (
        <li key={i}>
            <SymbolCard  symbol={data.symbol.symbol} tweet={data.messages[0].body} tweetCount={data.messages.length}/>
        </li>
    )).slice(0, 5);

    return (
    <ul>
        {dataElements}
    </ul>
    )
}

export default Symbols;