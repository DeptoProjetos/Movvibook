import React, { useState } from 'react'
import styles from './CardHeadline.module.scss'
import Modal from '../Modal/Indes'

export default function Headline({ news }) {

    const [modal, setModal] = useState(false)

    news.manchete = ''

    for (let i = 0; news.text.length < 30 ? i < (news.text.length) : i < 30; i++) {
        news.manchete += news.text[i]
    }

    return (
        <>
            <div key={news.id}
                className={styles.news}
                onClick={() => setModal(!modal)}
            >
                <h1>{news.nome}</h1>
                <p>{`${news.manchete}...`}</p>
            </div>
            {modal
                ? <Modal key={`modal-${news.id}`} title={news.nome} children={news.text} click={() => setModal(!modal)} w="500px"/>
                : ''}
        </>

    )


}
