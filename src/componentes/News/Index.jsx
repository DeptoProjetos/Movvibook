import React from 'react'
import Headline from '../CardHeadline/Index'
import styles from './News.module.scss'

export default function News({ news }) {

  return (
    <div className={styles.headlines}>
      {
        news.map(value => <Headline key={value.id} news={value} />
        )}
    </div>

  )
}
