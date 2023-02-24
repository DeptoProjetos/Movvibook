import React from 'react'
import { RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri'
import { BsFillGearFill } from 'react-icons/bs'

import TextTitle from '../TextTitle/Index'
import styles from './Footer.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    
    const navegate = useNavigate()

    return (
        <footer className={styles.footer}>
            <BsFillGearFill style={{position:"absolute", bottom:55,left:10}} size={20} color="#ff6700" onClick={()=>navegate("login")}/>
            <div className={styles.footer__social}>
                <RiFacebookFill size="1.75em" color='#ff6700' />
                <RiInstagramFill size="1.75em" color='#ff6700' />
                <RiLinkedinBoxFill size="1.75em" color='#ff6700' />
            </div>
            <TextTitle typeStyle={{fontSize:"0.75em", fontWeight:"600",margin:"0 2em"}} text='Desenvolvido por Movvi Logistica' />
        </footer>
    )
}
