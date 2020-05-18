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