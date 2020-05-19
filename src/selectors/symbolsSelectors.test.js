import { getSymbolObject } from './symbolsSelectors'


describe('Symbol Selectors', () => {
    it('selects all symbols from state', () => {
        const state = {
            symbols: [
                {symbol: 'NKE', tweet: 'test test test', tweetsCount: 4},
                {symbol: 'AAPL', tweet: 'test test test', tweetsCount: 5}
            ]
        }

        const symbols = getSymbolObject(state.symbols)
        expect(symbols).toEqual([
            {symbol: 'NKE', tweet: 'test test test', tweetsCount: 4},
            {symbol: 'AAPL', tweet: 'test test test', tweetsCount: 5}
        ]);
    });
});