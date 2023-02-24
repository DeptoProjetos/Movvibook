import { ApiContext } from 'common/Apis'
import Button from 'componentes/Button/Index'
import InputBox from 'componentes/InputBox/Index'
import React, { useContext } from 'react'
import styles from './Form.module.scss'

export default function FormPost() {

    const { onChange,
        nome,
        setNome,
        tag,
        setTag,
        path,
        setPath,
        fpath,
        setFpath,
        adicionarAT } = useContext(ApiContext)

    return (
        <form className={styles.form} onSubmit={event => {
            event.preventDefault()
            adicionarAT(nome,tag,path,fpath)

        }}>

            <InputBox
                color='#6c6c6c'
                st="login"
                type='text'
                label='Nome arquivo ou treinamento'
                obrigatorio={true}
                placeholder='Exp: Performance'
                value={nome}
                aoAlterar={setNome}
                setItem={onChange} />

            <InputBox
                color='#6c6c6c'
                st="login"
                type='text'
                label='Tag do arquivo ou treinamento'
                obrigatorio={true}
                placeholder='Exp: Arquivo'
                value={tag}
                aoAlterar={setTag}
                setItem={onChange} />

            <InputBox
                color='#6c6c6c'
                st="login"
                type='file'
                label='Foto de capa'
                obrigatorio={true}
                placeholder=''
                value={path}
                aoAlterar={setPath}
                setItem={onChange} />
            <InputBox
                color='#6c6c6c'
                st="login"
                type='file'
                label='Arquivo/Treinamento'
                obrigatorio={true}
                placeholder=''
                value={fpath}
                aoAlterar={setFpath}
                setItem={onChange} />
            <Button text="Adicionar" type="submit" />
        </form>
    )
}
