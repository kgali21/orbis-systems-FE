import { ADD_SYMBOL, REMOVE_SYMBOL, UPDATE_SYMBOL } from '../actions/symbolActions';


export default function reducer(state = [], action){
    switch(action.type) {
        case ADD_SYMBOL:
            return [...state, action.payload]
        case UPDATE_SYMBOL:
            return action.payload
        case REMOVE_SYMBOL: 
            return state.filter((symbol) => symbol.symbol.symbol.toLowerCase() !== action.payload.toLowerCase());
        default:
            return state;
    }
};