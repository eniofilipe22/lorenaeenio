import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Nos from "../../assets/Nos(4).png";
import Igreja from "../../assets/igreja.png";
import Capa from "../../assets/capa.webp";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

import { Autoplay} from 'swiper/modules';



const Carrossel = () => {
    return (
        <div className="mySwiper">
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
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