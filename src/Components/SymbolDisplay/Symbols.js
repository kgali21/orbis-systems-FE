import React from 'react';
import SymbolCard from './SymbolCard';
import { useSelector } from 'react-redux';
import { getSymbolObject, getSymbol, getNewestTweet, getNumberOfTweets 
} from '../../selectors/symbolsSelectors';

const Symbols = () => {
    // const dispatch = useDispatch();

    const symbols = useSelector(getSymbolObject)
    const symbolSel = useSelector(getSymbol)
    const tweetSel = useSelector(getNewestTweet)
    const tweetCountSel = useSelector(getNumberOfTweets)
    
    const dataElements = symbols.map((_, i) => (
        <li key={i}>
            <SymbolCard  symbol={symbolSel} tweet={tweetSel} tweetCount={tweetCountSel}/>
        </li>
    ))

    return (
    <ul>
        {dataElements}
    </ul>
    )
}

export default Symbols;