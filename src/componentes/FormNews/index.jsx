import { ApiContext } from 'common/Apis'
import Button from 'componentes/Button/Index'
import InputBox from 'componentes/InputBox/Index'
import React, { useContext } from 'react'
import styles from './Form.module.scss'

export default function FormNews() {

    const { onChange,
        nome,
        setNome,
        tag,
        setTag,
        text,
        setText} = useContext(ApiContext)

    return (
        <form className={styles.form} onSubmit={event => {
            event.preventDefault()

        }}>

            <InputBox
                color='#6c6c6c'
                st="login"
                type='text'
                label='Usuário'
                obrigatorio={true}
                placeholder=''
                value={nome}
                aoAlterar="" />

            <InputBox
                color='#6c6c6c'
                st="login"
                type='text'
                label='Usuário'
                obrigatorio={true}
                placeholder='Tag do arquivo ou treinamento'
                value=""
                aoAlterar="" />

            <InputBox
                color='#6c6c6c'
                st="login"
                type='text'
                label='Usuário'
                obrigatorio={true}
                placeholder='Foto de capa'
                value=""
                aoAlterar="" />
            <Button text="Adicionar" type="submit" />
        </form>
    )
}
