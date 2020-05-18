import { addSymbol } from '../actions/symbolActions';
import reducer from './symbolsReducer';


describe('Symbol Reducer', () => {
    it('handle ADD_SYMBOL', () => {
        const state = [];
        const action = addSymbol({
            symbol: 'AAPL',
            tweet: 'test test test',
            tweetsCount: 5
        })

        const newState = reducer(state, action);

        expect(newState).toEqual([
            {
                symbol: 'AAPL',
                tweet: 'test test test',
                tweetsCount: 5
            }
        ]);
    });




})