import React from 'react'
import TextIcon from '../TextIcon/Index'
import { AiFillHome } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { HiLightBulb } from 'react-icons/hi'
import { MdPermPhoneMsg } from 'react-icons/md'


import styles from './Menu.module.scss'
import Logo from '../Logo/Index'

export default function ListIcon() {
  return (
    <header>
      
      <Logo/>
      <ul className={styles.lista}>
        <TextIcon to='/' icon={<AiFillHome size={25} />} text='Início' />
        <TextIcon to='/contatos' icon={<MdPermPhoneMsg size={25} />} text='Quem é quem' />
        <TextIcon to='/pessoas&cultura' icon={<IoIosPeople size={25} />} text='Pessoas & Cultura' />
        <TextIcon to='/quemsomos' icon={<HiLightBulb size={25} />} text='Quem somos' />
      </ul>
    </header>
  )
}
