import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SymbolCard from './SymbolCard';
import { useSelector, useDispatch } from 'react-redux';
import { getSymbols } from '../../selectors/symbolsSelectors';

const Symbols = () => {
    const dispatch = useDispatch();

    const symbols = useSelector(getSymbols)

    const dataElements = symbols.map((symbol, i) => (
        <li key={i}>
            <SymbolCard {...symbol} />
        </li>
    ))

    return (
    <ul>
        {dataElements}
    </ul>
    )
}

Symbols.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        tweet: PropTypes.string.isRequired,
        tweetCount: PropTypes.number.isRequired,
    })).isRequired
};

export default Symbols;