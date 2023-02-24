import React from 'react'

import banners from 'json/banners.json'

import styles from './PaginaInicial.module.scss'
import TextTitle from 'componentes/TextTitle/Index'
import Tags from 'componentes/Tags/Index'
import Galery from 'componentes/Galery/Index'
import News from 'componentes/News/Index'
import Button from 'componentes/Button/Index'
import Cards from 'componentes/CardFile/Index'
import { useNavigate } from 'react-router-dom'
import Swipers from 'componentes/Swiper/Index'
import { useContext } from 'react'
import { ApiContext } from 'common/Apis'




export default function PaginaInicial() {

    const {lista, itens,setItens, noticias, deletarAT} = useContext(ApiContext)

    let topFive = noticias
    .slice(0, 5)
    
    const filterFiles = (tag) => {
        
        const newFiles = lista.filter((file) => file.tag === tag);
        
        setItens(newFiles)
    }
    
    const navegar = useNavigate()

    return (
        <main>
            <section className={styles.principal__banners}>
                <Swipers imgs={banners} />
                {/* <Carousel imgs={banners} /> */}
            </section>
            <TextTitle text='Arquivos & Treinamentos' />
            <section className={styles.principal__left__side}>
                <section>
                    <Tags files={lista} click={filterFiles} setItens={setItens} />
                    <Galery cards={itens.map(item=><Cards key={item.id} click={deletarAT} item={item}/>)} />
                </section>
                <section className={styles.principal__right__side}>
                    <div className={styles.principal__right__side__news}>
                        <TextTitle typeStyle={{ marginTop: 0, marginBottom: 0, textAlign: 'center' }} text='Notícias' />
                        <News news={topFive} />
                        <Button text='Ver mais' style={{ marginLeft: "1em" }} onClick={() => navegar("noticias")} />
                    </div>
                    <div>
                        <TextTitle typeStyle={{ marginTop: 0, marginBottom: 0, textAlign: 'center' }} text='Aniversários' />
                        <News news={topFive} />
                    </div>
                </section>
            </section>
        </main>
    )
}
