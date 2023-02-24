import Header from 'componentes/Header/Index'
import Tags from 'componentes/Tags/Index'
import List from 'componentes/List'
import React, { useContext } from 'react'
import { useState } from 'react'

import styles from './Noticias.module.scss'
import { ApiContext } from 'common/Apis'

export default function Noticias({ titulo }) {

  const {noticias} = useContext(ApiContext)

  const [itens, setItens] = useState(noticias.sort((a, b) => b.id - a.id))

  function aoClick(tag) {
    const newItens = noticias.filter(file => file.tag === tag)

    setItens(newItens)
  }


  return (
    <div className={styles.noticias}>
      <Header titulo={titulo} />
      <Tags files={noticias} click={aoClick} setItens={setItens} />
      <div className={styles.noticias__content}>
        <List itens={itens} />

      </div>

    </div>
  )
}
