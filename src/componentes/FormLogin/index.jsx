import InputBox from 'componentes/InputBox/Index';
import React, { useContext } from 'react';
import { UserContext } from 'common/User';
import styles from './FormLogin.module.scss'
import Button from 'componentes/Button/Index';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'

export default function FormLogin() {

    const { nome, senha, setSenha, setNome, fazerLogin } = useContext(UserContext)



    return (
        <form className={styles.form}  onSubmit={event=>{
            event.preventDefault()
            
            fazerLogin(nome,senha)
        }}>
            <h1>Movvibook</h1>
            <p>Olá, Sejá bem vindo ao <strong>Movvibook!</strong><br /> A área de comunicação interna da Movvi Logística.</p>
            <div className={styles.form__input}>
                <AiOutlineUser size={20} style={{ margin: "0 0.5em 0 0" }} />
                <InputBox color='#6c6c6c' st="login" type='text' obrigatorio={true} placeholder='Digite seu usuário...' value={nome} aoAlterar={setNome} />
            </div>
            <div className={styles.form__input}>
                <AiOutlineLock size={20} style={{ margin: "0 0.5em 0 0" }} /><InputBox color='#6c6c6c' st="senha" type='password' obrigatorio={true} placeholder='Digite sua senha...' value={senha} aoAlterar={setSenha} />
            </div>
            <Button text="Acessar" type="submit"/>
        </form>
    )
}
