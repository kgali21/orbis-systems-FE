import React from 'react';
import Proptypes from 'prop-types';

const Symbol = ({ symbol, tweet, tweetCount}) => (
    <div>
        <h1>{symbol}</h1>
        <p>{tweet}</p>
        <p>{tweetCount}</p>
    </div>
);

Symbol.propTypes = {
    symbol: Proptypes.string.isRequired,
    tweet: Proptypes.string.isRequired,
    tweetCount: Proptypes.string.isRequired,
};

export default Symbol
