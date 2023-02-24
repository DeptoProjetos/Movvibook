import React from 'react'
import styles from './InputBox.module.scss'


export default function InputBox({ value = '', type = 'text', placeholder, aoAlterar, m, w = '', h = '', img = '', label='',setItem=''}) {

  const aoDigitado = (evento) => {
    setItem!==''
    ?setItem(evento.target.value,aoAlterar)
    :aoAlterar(evento.target.value)
  }

  return (
    <>
    {label?<label className={styles.label}>{label}</label>:''}
    <input
      className={styles.input}
      value={value}
      type={type}
      placeholder={placeholder}
      style={{ width: w, height: h, backgroundImage: img, margin:m}}
      onChange={event=>aoDigitado(event)}
    />
    </>
  )
}
