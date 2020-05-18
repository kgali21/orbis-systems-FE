import React from 'react';
import SymbolRequestForm from '../SymbolRequestForm/SymbolRequestForm';
import Symbols from '../SymbolDisplay/Symbols';
import SymbolRemoveForm from '../SymbolRequestForm/SymbolRemoveForm';

const Home = () => (
    <>
        <SymbolRequestForm />
        <SymbolRemoveForm />
        <Symbols />
    </>
)

export default Home;