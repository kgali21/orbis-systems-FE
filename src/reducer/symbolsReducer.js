import { ADD_SYMBOL, REMOVE_SYMBOL, UPDATE_SYMBOL } from '../actions/symbolActions';


export default function reducer(state = [], action){
    switch(action.type) {
        case ADD_SYMBOL:
            return [...state, action.payload];
        case UPDATE_SYMBOL:
            return state.map((symbol, i) => {
                if(i === action.payload.index) return action.payload.symbol
                return symbol;
            });
        case REMOVE_SYMBOL: 
            return state.filter((_, symbol) => symbol.symbol !== action.payload.symbol);
        default:
            return state;
    }
};
