import React from 'react'
import styles from './Formularios.module.scss'
import Header from 'componentes/Header/Index'
import { useParams } from 'react-router-dom'
import FormPost from 'componentes/FormPost'
import FormContacts from 'componentes/FormContacts'
import FormNews from 'componentes/FormNews'

export default function Formularios() {

    const parametros = useParams()

    return (
        <div className={styles.novo}>
            <Header titulo={
                parametros.id === "ArquivosETreinamentos"
                    ? "Adicionar arquivos e treinamentos"
                    : parametros.id === "contatos"
                        ? "Adicionar contato"
                        : "teste"} />
            <div className={styles.novo__content}>
                {
                    parametros.id === "ArquivosETreinamentos"
                        ? <FormPost />
                        : parametros.id === "contatos"
                            ? <FormContacts />
                            : <FormNews />
                }


            </div>

        </div>
    )
}
