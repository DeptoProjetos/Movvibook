import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Carousel.module.scss'

export default function Carousel({ imgs }) {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <motion.div
            ref={carousel}
            className={styles.carousel}
            whileTap={{ cursor: 'grabbing' }}>

            <motion.div 
            className={styles.carousel__inner} 
            drag='x' 
            dragConstraints={{ right: 0, left: -width }}
            initial={{x:-carousel.current?.scrollWidth}}
            animate={{x:0}}
            transition={{duration:5}}
>
                
                {imgs.map(img => (<motion.div key={img.alt} className={styles.carousel__banner}> <img src={img.path} alt={img.alt} /> </motion.div>))}
            </motion.div>
        </motion.div>
    )
}
