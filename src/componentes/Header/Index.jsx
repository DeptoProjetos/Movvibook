import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'


export default function Header({titulo}) {

    const navegar = useNavigate()

    return (
        <header className={styles.principal}>
            <div>
            <AiOutlineArrowLeft size={30} color="#ff6700" className={styles.principal__voltar} onClick={()=>navegar(-1)}/>
            </div>
                <h1>{titulo}</h1>
        </header>
    )
}
