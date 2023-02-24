import React from 'react'
import styles from './Swiper.module.scss'
import 'swiper/css';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import {  Pagination, Autoplay } from "swiper";



export default function Swipers({ imgs }) {
    return (
        <div className={styles.swiper}>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                spaceBetween={50}
                slidesPerView={1}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
            >
                {imgs.map(teste => <SwiperSlide key={teste.id}> <img className={styles.imagem} src={teste.path} alt={teste.alt} /></SwiperSlide>)}

            </Swiper>
        </div>)
}
