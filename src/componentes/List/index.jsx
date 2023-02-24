import React from 'react'
import styles from './List.module.scss'

export default function index({ itens }) {
    return (
        <ul className={styles.lista}>
            {itens.map(item =>
                <li className={styles.lista__item}>
                    <div className={styles.lista__noticias}>
                        <div>
                            <h3>{item.nome}</h3>
                            <p>{item.date}</p>
                        </div>
                        <p>{item.text}</p>

                    </div>
                </li>)}
        </ul>
    )
}
