import { UserContext } from 'common/User'
import React, { useContext, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import styles from './CardContacts.module.scss'

export default function Contacts({ colaborador, corDeFundo = '', aoFavoritar = '' }) {

    const { id } = useContext(UserContext)

    const [warning, setWarning] = useState(false)

    return (
        <div className={styles.colaborador}>
             {id ? <div className={styles.colaborador__admin}> <BsFillPencilFill size={15} /><AiFillCloseCircle size={17} onClick={() => setWarning(!warning)} /> </div> : ''}
            <div className={styles.colaborador__cabecalho}>
                <img src={colaborador.path} alt={colaborador.title} />
            </div>
            <div className={styles.colaborador__rodape}>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.tag}</h5>
                <p>{colaborador.tel}</p>
            </div>
        </div>)
}