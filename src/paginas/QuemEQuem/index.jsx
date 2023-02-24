import React, { useState } from 'react'

// import contatos from './contatos.json'

import Galery from '../../componentes/Galery/Index'
import Tags from '../../componentes/Tags/Index'
import InputBox from '../../componentes/InputBox/Index'
import Contacts from '../../componentes/CardContacts/Index'
import { useContext } from 'react'
import { ApiContext } from 'common/Apis'

export default function QuemEQuem() {
    const {contatos, novosContatos, setNovosContatos} = useContext(ApiContext)
    const [value, setValor] = useState('')

    console.log(contatos)


    const filterFiles = (tag) => {

        const newFiles = contatos.filter(file => {
            return file.tag === tag;
        })

        setNovosContatos(newFiles)
    }

    function Left(str, n) {
        if (n <= 0)
            return "";
        else if (n > String(str).length)
            return str;
        else
            return String(str).substring(0, n);
    }

    const aoAlterar = (evento) => {

        let contact = evento.target.value

        setValor(contact)

        let name = novosContatos.filter(valor => Left(valor.title.toLowerCase(), contact.length) === contact.toLowerCase())

        contact.length === 0
            ? setNovosContatos(contatos)
            : setNovosContatos(name)
    }

    return (
        <main>
            <InputBox w='50%' m='0 0 1em 0' value={value} aoAlterar={aoAlterar} placeholder='Pesquisar colaborador:' />
            <Tags files={contatos} click={filterFiles} setItens={setNovosContatos} text="Busque por setor:" />
            <Galery cards={novosContatos.map(contato => <Contacts key={contato.id} colaborador={contato} />)} />
        </main>
    )
}
