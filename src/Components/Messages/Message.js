import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ tweets }) => {
    <p>{tweets}</p>
}

Message.propTypes = {
    tweets: PropTypes.string.isRequired
}