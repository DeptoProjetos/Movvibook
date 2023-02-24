import React, { createContext } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export const ApiContext = createContext();
ApiContext.displayName = "API";

const data = new Date()



export default function ApisProvider({ children }) {

    const [lista, setLista] = useState([])
    const [itens, setItens] = useState(lista)
    const [noticias, setNoticias] = useState([])
    const [contatos, setContatos] = useState([])
    const [novosContatos, setNovosContatos] = useState([])

    const [nome, setNome] = useState('')
    const [tag, setTag] = useState('')
    const [path, setPath] = useState('')
    const [fpath, setFpath] = useState('')
    const [tel, setTel] = useState('')
    const [text, setText] = useState('')


    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then(response => {
                setItens(response.data)
                setLista(response.data)
            })

        axios.get("http://localhost:3000/noticias")
            .then(response => {
                setNoticias(response.data.sort((a, b) => b.id - a.id))

            })

        axios.get("http://localhost:3000/contatos")
            .then(response => {
                setContatos(response.data)
                setNovosContatos(response.data)

            })
    }, [])

    function alterarAT(item) {
        axios.put("http://localhost:3000/posts", {
            "nome": nome,
            "tag": tag,
            "path": path,
            "fpath": fpath
        })
            .then(response => alert("Alterado com sucesso"))
            .catch(erro => alert(erro))

    }

    function deletarAT(item) {
        axios.delete(`http://localhost:3000/posts/${item.id}/`)
            .then(response => {
                axios.get("http://localhost:3000/posts")
                    .then(response => {
                        setItens(response.data)
                        setLista(response.data)
                    })
            })
            .catch(erro => alert(`Erro ${erro} Não foi possivel deletar o arquivo`))
    }

    function adicionarAT(nome, tag, path, fpath) {
        axios.post("http://localhost:3000/posts", {
            "nome": nome,
            "tag": tag,
            "path": path,
            "fpath": fpath
        })
            .then(response => {
                axios.get("http://localhost:3000/posts")
                    .then(response => {
                        setItens(response.data)
                        setLista(response.data)
                    })
            })
            .catch(erro => alert(erro))

        setNome('')
        setTag('')
        setPath('')
        setFpath('')
        setTel('')
    }

    function adicionarCT(nome, tag, path, tel) {
        axios.post("http://localhost:3000/contatos", {
            "nome": nome,
            "tag": tag,
            "path": path,
            "tel": tel
        })
            .then(response => alert(response))
            .catch(erro => alert(erro))
    }

    function adicionarNW(nome, text, tag) {
        axios.post("http://localhost:3000/contatos", {
            "nome": nome,
            "path": text,
            "tag": tag,
            "date": `${data.getFullYear()}-${data.getMonth()}-${data.getDay()}`
        })

            .then(response => alert(response))
            .catch(erro => alert(erro))

    }

    function onChange(value, set) {
        console.log(value)
        set(value)

    }


    return (
        <ApiContext.Provider value={
            {
                lista,
                itens,
                setItens,
                noticias,
                deletarAT,
                adicionarAT,
                onChange,
                nome,
                setNome,
                tag,
                setTag,
                path,
                setPath,
                fpath,
                setFpath,
                tel,
                setTel,
                text,
                setText,
                adicionarCT,
                adicionarNW,
                contatos,
                novosContatos,
                setNovosContatos
            }}>

            {children}
        </ApiContext.Provider>
    )
}
