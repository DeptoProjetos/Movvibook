import { ApiContext } from 'common/Apis'
import Button from 'componentes/Button/Index'
import InputBox from 'componentes/InputBox/Index'
import React, { useContext } from 'react'
import styles from './Form.module.scss'

export default function FormContacts() {

    const { onChange,
        nome,
        setNome,
        tag,
        setTag,
        path,
        setPath,
        tel,
        setTel,
        adicionarCT } = useContext(ApiContext)

    return (
        <form className={styles.form} onSubmit={event => {
            event.preventDefault()
            adicionarCT(nome,tag,path,tel)

        }}>

            <InputBox
                color='#6c6c6c'
                st="login"
                type='text'
                label='Nome contato'
                obrigatorio={true}
                placeholder='Exp: Thaynara Silva'
                value={nome}
                aoAlterar={setNome}
                setItem={onChange} />

            <InputBox
                color='#6c6c6c'
                st="login"
                type='text'
                label='Setor'
                obrigatorio={true}
                placeholder='Exp: Marketing'
                value={tag}
                aoAlterar={setTag}
                setItem={onChange} />

            <InputBox
                color='#6c6c6c'
                st="login"
                type='text'
                label='Telefone'
                obrigatorio={true}
                placeholder='(99) 9 9999-9999'
                value={tel}
                aoAlterar={setTel}
                setItem={onChange} />

            <InputBox
                color='#6c6c6c'
                st="login"
                type='file'
                label='Foto'
                obrigatorio={true}
                placeholder=''
                value={path}
                aoAlterar={setPath}
                setItem={onChange} />
            <Button text="Adicionar" type="submit" />
        </form>
    )
}
