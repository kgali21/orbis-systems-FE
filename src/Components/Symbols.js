import React from 'react';
import PropTypes from 'prop-types';
import SymbolCard from './SymbolCard';

const Symbols = ({ data }) => {
    // console.log(data[0])


    const dataElements = data.map((symbol, i) => (
        <li key={i}>
            <SymbolCard
            symbol={data[0].symbol.symbol}
            tweet={data[0].messages[0].body}
            tweetCount={data[0].messages.length}
            />
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
        tweetCount: PropTypes.string.isRequired,
    })).isRequired
};

export default Symbols;