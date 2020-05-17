import React, { Component } from 'react';
import SymbolRequestForm from '../Components/SymbolRequestForm/SymbolRequestForm';
import Symbols from '../Components/SymbolDisplay/Symbols';
import { fetchSymbol } from '../services/stockTwitAPI';

export default class SymbolContainer extends Component {
    state = {
        symbol: '',
        tweet: '',
        tweetCount: 0,
        symbols: []
    }

    handleChange = ({ target }) => {
        this.setState({ symbol: target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        fetchSymbol(this.state.symbol)
            .then(([symbols]) => this.setState({ symbols }))
            // fetchSymbol(this.state.symbol)
            console.log(this.state.symbol)

    }

render(){
const { symbol, symbols} = this.state;
 return (
    <>
        <SymbolRequestForm symbol={symbol} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        <Symbols data={symbols}/>
    </>
        );
    }
}
