import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Nos from "../../assets/Nos(4).png";
import Igreja from "../../assets/igreja.png";
import Capa from "../../assets/capa.webp";
import Carrossel1 from "../../assets/Carrossel1.webp";
import Carrossel2 from "../../assets/Carrossel2.webp";
import Carrossel3 from "../../assets/Carrossel3.webp";
import Carrossel4 from "../../assets/Carrossel4.webp";
import Carrossel5 from "../../assets/Carrossel5.webp";
import Carrossel6 from "../../assets/Carrossel6.webp";
import Carrossel7 from "../../assets/Carrossel7.webp";

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
                    <img src={Carrossel1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Carrossel2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Carrossel3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Carrossel4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Carrossel5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Carrossel6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Carrossel7} />
                </SwiperSlide>
                
            </Swiper>
        </div>);
};

export default Carrossel;