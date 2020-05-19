import React from 'react';
import SymbolRequestForm from '../SymbolRequestForm/SymbolRequestForm';
import Symbols from '../SymbolDisplay/Symbols';
import SymbolRemoveForm from '../SymbolRequestForm/SymbolRemoveForm';
import styles from './Home.module.css';

const Home = () => (
    <div className={styles.App}>
    <div className={styles.Form}>
        <p>Add a stock symbol to start tracking</p>
        <SymbolRequestForm />
        <p>Remove a stock symbol</p>
        <SymbolRemoveForm />
    </div>
        <Symbols />
    </div>
)

export default Home;