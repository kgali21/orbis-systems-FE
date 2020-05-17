import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SymbolCard from './SymbolCard';

const Symbols = ({ data }) => {

    







    const dataElements = data.map((symbol, i) => (
        <li key={i}>
            <SymbolCard {...symbol} />
        </li>
    ))

    return (
    <ul>{dataElements}</ul>
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