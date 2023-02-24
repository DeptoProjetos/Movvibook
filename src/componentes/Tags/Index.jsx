import React from 'react'
import styles from './Tags.module.scss'


export default function Tags({ files,click, setItens, text="Busque por tags:" }) {


    const listTags = [...new Set(files.map(valor => valor.tag))].sort()


    return (
        <div className={styles.tags}>
            <h1 >{text}</h1>
            <ul className={styles.tags__lista}>
                {listTags.map((tag) => <li key={tag} onClick={() => click(tag)}>{tag}</li>)}
                <li key='Todas' onClick={() => setItens(files)}>Tudo</li>
            </ul>
        </div>
    )
}
