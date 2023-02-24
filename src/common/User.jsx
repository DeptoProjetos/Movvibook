import axios from 'axios';
import { createContext, React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();
UserContext.displayName = "Usuário";

export default function UserProvider({ children }) {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('');
    const [id, setId] = useState('');
    const navegar = useNavigate()

    function alteraEstrutura(id='') {

        if(!id) {
            setId('')
            navegar("/")
            return alert("Senha invalida")
        }

        setId(id)
        navegar("/")
        
    }

    function fazerLogin(nome, senha) {

        axios.get('http://localhost:3000/user')
            .then(response =>
                response.data.map( dados =>
                    dados.login === nome
                        ? dados.password === senha
                            ? alteraEstrutura(dados.id)
                            : alteraEstrutura()
                        : alert("Login invalido"))
)}

return (
    <UserContext.Provider value={{ nome, senha, id, setSenha, setNome, fazerLogin }}>
        {children}
    </UserContext.Provider>
)
    }