import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './TextIcon.module.scss'

export default function TextIcon({icon, text,to}) {

  return (
    <NavLink to={to} className={({isActive})=> isActive?`${styles.conteudo__selected} ${styles.conteudo} ` : styles.conteudo}>
        {icon}
        <h3 className={styles.conteudo__titulo}>{text}</h3>
    </NavLink>
  )
}
