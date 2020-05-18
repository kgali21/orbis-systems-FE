import React from 'react';
import SymbolCard from './SymbolCard';
import { useSelector } from 'react-redux';
import { getSymbolObject } from '../../selectors/symbolsSelectors';

const Symbols = () => {

    const symbols = useSelector(getSymbolObject)
    
    const dataElements = symbols.map((data, i) => (
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