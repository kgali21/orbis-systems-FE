import React from 'react';
import PropTypes from 'prop-types';

const SymbolRequestForm = ({  symbol, onSubmit, onChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={symbol} onChange={onChange} maxLength='5' placeholder="Add or Remove a Symbol" />
            <button>Add/Remove</button>
        </form>
    )
};

SymbolRequestForm.propTypes = {
    symbol: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SymbolRequestForm;