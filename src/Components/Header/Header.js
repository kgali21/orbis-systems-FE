import React from 'react';
import styles from './Header.module.css';

const Header = () => (
    <span className={styles.ImgContainer}>
        <img className={styles.Logo} src='https://www.orbisfn.com/img/orbislogo.svg' alt='Orbis Logo' />
    </span>
);

export default Header;