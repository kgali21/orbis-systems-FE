import { fetchSymbol } from '../services/stockTwitAPI';

export const ADD_SYMBOL = 'ADD_SYMBOL';
export const addSymbol = (symbol) => dispatch => {
    return fetchSymbol(symbol)
        .then(addedSymbol => {
            dispatch({
                type: ADD_SYMBOL,
                payload: addedSymbol
            });
        });
};

export const UPDATE_SYMBOL = 'UPDATE_SYMBOL';
export const updateSymbol = (index, symbol) => ({
    type: UPDATE_SYMBOL,
    payload: {
        index,
        symbol
    }
});

export const REMOVE_SYMBOL = 'REMOVE_SYMBOL';
export const removeSymbol = symbol => ({
    type: REMOVE_SYMBOL,
    payload: symbol
})