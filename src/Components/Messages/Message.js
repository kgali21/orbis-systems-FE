import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.css';

const Message = ({ tweets, timeStamp }) => (
    <div className={styles.Tweets}>
        <p>{tweets}</p>
        <p className={styles.TimeStamp}>{timeStamp}</p>
    </div>
)

Message.propTypes = {
    tweets: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired
}

export default Message;