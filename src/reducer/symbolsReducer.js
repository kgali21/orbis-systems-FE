import { ADD_SYMBOL, REMOVE_SYMBOL } from '../actions/symbolActions';


export default function reducer(state = [], action){
    switch(action.type) {
        case ADD_SYMBOL:
            return [...state, action.payload];
        case REMOVE_SYMBOL:
            return state.filter(symbol => symbol === action.payload)
        default:
            return state;
    }
}