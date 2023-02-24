/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import styles from './Modal.module.scss'
import {AiFillCloseCircle } from 'react-icons/ai'

export default function Modal({ title, children, click,w='' }) {

    return (
        <div key={title} className={styles.modal}>
            <div className={styles.modal__card} style={{width:w}}>
                <div className={styles.modal__card__title}>
                    <h1>{title}</h1>
                    <AiFillCloseCircle style={{
                        position: "absolute",
                        right: "1em",
                        top: "1em",
                        fontSize: "1em",
                        fontWeight: "600"
                    }}
                        text='X'
                        onClick={click}
                        onMouseOver={({ target }) => target.style.scale = "1.1"}
                        onMouseOut={({ target }) => target.style.scale = "1"} />
                </div>
                <div className={styles.modal__card__content}>
                    {children}
                </div>

            </div>
        </div>
    )
}
