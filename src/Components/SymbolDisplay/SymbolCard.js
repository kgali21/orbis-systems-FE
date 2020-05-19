import React from 'react';
import PropTypes from 'prop-types';
import styles from './SymbolCard.module.css';

const Symbol = ({ symbol, tweet, tweetCount}) => (
    <div className={styles.Card}>
        <h1>${symbol}</h1>
        <p>Tweet Count </p>
        <p className={styles.Count}>{tweetCount}</p>
        <ul className={styles.Tweets}>
            <li>
                {tweet}
            </li>
        </ul>
    </div>
);

Symbol.propTypes = {
    symbol: PropTypes.string.isRequired,
    tweet: PropTypes.string.isRequired,
    tweetCount: PropTypes.number.isRequired
};

export default Symbol
