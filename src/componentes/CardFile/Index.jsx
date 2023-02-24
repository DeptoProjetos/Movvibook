import React, { useState, useContext } from 'react'
import styles from './CardFile.module.scss'
import { AiOutlineHeart, AiFillHeart, AiFillCloseCircle } from 'react-icons/ai'
import { MdOpenInNew } from 'react-icons/md'
import { HiDownload } from 'react-icons/hi'
import { BsFillPencilFill } from 'react-icons/bs'
import { UserContext } from 'common/User'
import Warning from 'componentes/Warning'
import Button from 'componentes/Button/Index'



export default function Cards({ item, click }) {

  const [favorite, setFavorite] = useState(false)

  const { id } = useContext(UserContext)

  const [warning, setWarning] = useState(false)

  return (
    <>

      <div className={styles.c}>
        {id ? <div className={styles.c__admin}> <BsFillPencilFill size={15} /><AiFillCloseCircle size={17} onClick={() => setWarning(!warning)} /> </div> : ''}
        <div className={styles.card} key={item.nome}>
          <img src={item.path} alt={item.nome} />
          <h2>{item.nome}</h2>
          <div className={styles.card__content}>
            {item.tag}
            <div className={styles.card__content__tag}>
              {
                favorite
                  ? <AiFillHeart
                    size={20}
                    style={{ color: 'red' }}
                    onClick={() => setFavorite(!favorite)}
                    onMouseOver={({ target }) => {
                      target.style.color = "black"
                      target.style.scale = "1.1"
                    }}
                    onMouseOut={({ target }) => {
                      target.style.color = "red"
                      target.style.scale = "1"
                    }}

                  />

                  : <AiOutlineHeart
                    size={20}
                    onClick={() => setFavorite(!favorite)}
                    onMouseOver={({ target }) => {
                      target.style.color = "black"
                      target.style.scale = "1.1"
                    }}
                    onMouseOut={({ target }) => {
                      target.style.color = "#6c6c6c"
                      target.style.scale = "1"
                    }}
                  />
              }

              <a href={item.fpath} target="__blank" download>
                <HiDownload
                  size={20}
                  onMouseOver={({ target }) => {
                    target.style.color = "black"
                    target.style.scale = "1.2"
                  }}

                  onMouseOut={({ target }) => {
                    target.style.color = "#6c6c6c"
                    target.style.scale = "1"
                  }}
                /></a>

              <a href={item.fpath} target="__blank">
                <MdOpenInNew
                  size={20}
                  onClick={() => { }}
                  onMouseOver={({ target }) => {
                    target.style.color = "black"
                    target.style.scale = "1.2"
                  }}

                  onMouseOut={({ target }) => {
                    target.style.color = "#6c6c6c"
                    target.style.scale = "1"
                  }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {warning
        ? <Warning click={
          () =>
            setWarning(!warning)}>
          {<div className={styles.card__warning}>
            <p>{`Você está preste a excluir o ${item.tag} de ${item.nome}!`} <br /> <br /> Realmente deseja excluir?</p>

            <div className={styles.card__warning__button}>
              <Button
                text="Excluir"
                onClick={() => {
                  click(item)
                  setWarning(!warning)
                }} />
              <Button
                text="Voltar"
                onClick={
                  () =>
                    setWarning(!warning)}
                className={true}/>
            </div>
          </div>
          }</Warning> : ''}

    </>)
}