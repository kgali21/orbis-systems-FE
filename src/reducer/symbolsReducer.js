import { ADD_SYMBOL, SET_SYMBOL } from '../actions/symbolActions';


export default function reducer(state = [], action){
    switch(action.type) {
        case ADD_SYMBOL:
            return [...state, action.payload];
        default:
            return state;
    }
}