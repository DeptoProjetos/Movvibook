import React from 'react';
import puma from './logo.png';
import styles from './Logo.module.scss';


export default function Logo() {
    return (
        <div className={styles.logo}>
            <img src={puma} alt="Logo Movvi" />
            <h1>Movvibook</h1>
        </div>
    )
}
