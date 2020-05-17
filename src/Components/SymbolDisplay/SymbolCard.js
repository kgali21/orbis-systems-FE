import React from 'react';
import PropTypes from 'prop-types';

const Symbol = ({ symbol, tweet, tweetCount}) => (
    <div>
        <h1>{symbol}</h1>
        <p>{tweet}</p>
        <p>{tweetCount}</p>
    </div>
);

Symbol.propTypes = {
    symbol: PropTypes.string.isRequired,
    tweet: PropTypes.string.isRequired,
    tweetCount: PropTypes.number.isRequired
};

export default Symbol