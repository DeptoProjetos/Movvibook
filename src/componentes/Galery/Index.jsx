import { UserContext } from 'common/User'
import { useContext } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Galery.module.scss'

export default function Galery({cards}) {

    const { id } = useContext(UserContext)

    const navegar = useNavigate()

    const parametros = useLocation()


    return (
        <div className={styles.add}>
            {id?<AiFillPlusCircle className={styles.add__button} onClick={()=>navegar(`/novo${parametros.pathname==="/"?"/ArquivosETreinamentos":parametros.pathname}`)}/>:""}
            <ul className={styles.cards}>
                {cards}
            </ul>
        </div>
    )
}
