import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Nos from "../../assets/Nos(4).png";
import Igreja from "../../assets/igreja.png";
import Capa from "../../assets/capa.webp";

// Import Swiper styles
import 'swiper/css';
import './style.css';


const Carrossel = () => {
    return (
        <div className="mySwiper">
            <Swiper
            >
                <SwiperSlide>
                    <img src={Nos} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Igreja} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Capa} />
                </SwiperSlide>
            </Swiper>
        </div>);
};

export default Carrossel;