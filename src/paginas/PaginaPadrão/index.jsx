import React from 'react'
import Menu from 'componentes/Menu/Index'
import { Outlet } from 'react-router-dom'
import styles from './PaginaPadrão.module.scss'
export default function PaginaPadrão() {
    return (
        <section className={styles.principal}>
            <Menu />
            <Outlet />
        </section>
    )
}
