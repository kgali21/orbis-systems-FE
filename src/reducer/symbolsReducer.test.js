import { removeSymbol, updateSymbol } from '../actions/symbolActions';
import reducer from './symbolsReducer';


describe('Symbol Reducer', () => {
    it('handle ADD_SYMBOL', () => {
        const state = [];
        const action = {
            type: 'ADD_SYMBOL',
            payload: {
                    symbol: 'AAPL',
                    tweet: 'test test test',
                    tweetCount: 5
            }
        }

        const newState = reducer(state, action);

        expect(newState).toEqual([
            {
                symbol: 'AAPL',
                tweet: 'test test test',
                tweetCount: 5
            }
        ]);
    });

    it('handles UPDATE_SYMBOL', () => {
    //     const state = [
    //         {
    //         symbol: 'AAPL',
    //         tweet: 'test test test',
    //         tweetCount: 5
    //     }
    // ];
        const state = [];
        // const action = updateSymbol(0, {
        //     symbol: 'AAPL',
        //     tweet: 'test test test',
        //     tweetCount: 5
        // });

        const action = {
            type: 'UPDATE_SYMBOL',
            payload:  [{
                symbol: 'AAPL',
                tweet: 'test test test',
                tweetCount: 5
            }]
        }         

        const newState = reducer(state, action);

        expect(newState).toEqual([
            {
                symbol: 'AAPL',
                tweet: 'test test test',
                tweetCount: 5
            }
        ]);
    });

    it('handles REMOVE_SYMBOL', () =>{
        const state = [
           {
            symbol: {
                symbol: 'AAPL',
                tweet: 'test test test',
                tweetCount: 5
            }
        }
        ];

        const action = removeSymbol(state)

        const newState = reducer(state.symbol, action)
        expect(newState).toEqual([])
    });
});

