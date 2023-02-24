import React from 'react'
import styles from './TextTitle.module.scss'

export default function TextTitle({text,typeStyle={}}) {
  return (
    <h1 style={typeStyle} className={styles.titulo}>{text}</h1>
  )
}
