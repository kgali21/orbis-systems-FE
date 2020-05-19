import React, { useEffect, useState } from 'react';
import SymbolCard from './SymbolCard';
import { useSelector } from 'react-redux';
import { getSymbolObject } from '../../selectors/symbolsSelectors';

const Symbols = () => {
    // const [symbols, setSymbols] = useState([]);
    const symbolsItems = useSelector(getSymbolObject);

    // useEffect((symbolsItems) => {
    //     setInterval(() =>{
    //         symbolsItems(setSymbols)
    //     }, 5000)
    //     console.log(symbols, 'symbols')
    // }, [symbolsItems])


    const dataElements = symbolsItems.map((data, i) => (
        <li key={i}>
            <SymbolCard  symbol={data.symbol.symbol} tweet={data.messages[0].body} tweetCount={data.messages.length}/>
        </li>
    ))

    return (
    <ul>
        {dataElements}
    </ul>
    )
}

export default Symbols;