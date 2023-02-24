import FormLogin from 'componentes/FormLogin'
import React from 'react'
import styles from './Login.module.scss'

export default function Login() {
    return (
        <div className={styles.login}>
            <FormLogin />
        </div>
    )
}