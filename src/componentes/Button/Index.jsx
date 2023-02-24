import React from 'react'
import styles from './Button.module.scss'

export default function Button({ text, onClick, style = {},className}) {
    return (
        <button
            style={style}
            onClick={onClick}
            className={className?styles.button__secundario:styles.button}
            onMouseOver={({ target }) => target.style.scale = "1.1"}
            onMouseOut={({ target }) => target.style.scale = "1"}> { text }</button >
    )
}
