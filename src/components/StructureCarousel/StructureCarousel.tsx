import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Structure.Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation, Thumbs, Scrollbar } from "swiper";

export default function StructureCarousel() {

    const [activeThumb, setActiveThumb] = useState<any>(null)

    const structureImages = [
        require('../../Img/area-comunale-1.jpg'), require('../../Img/areaGenerale1.jpg'), require('../../Img/corridoio1.jpg'), require('../../Img/corridoioQuadri.jpg'), require('../../Img/facciataentrata.jpg'), require('../../Img/facciataprincipale.jpg'), require('../../Img/fotoHotelProfilo.jpg'), require('../../Img/ingresso-portone.jpg'), require('../../Img/lampade.jpg'), require('../../Img/parcheggioInterno.jpg'), require('../../Img/piazzaSalerno.jpg')
    ]

    return (
        <div className="bgCarouselContainer" style={{ paddingTop: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                speed={1000}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, Thumbs]}
                className="mySwiper"
            >
                {structureImages.map((item, index) => (
                    <SwiperSlide key={index} className='swiper-slide'><img className="mainImg" src={item} style={{ width: '100%', height: '100%' }} alt='NONE'></img></SwiperSlide>
                )
                )}
            </Swiper>
            <Swiper
                onSwiper={setActiveThumb}
                loop={true}
                spaceBetween={5}
                slidesPerView={4}
                modules={[Navigation, Thumbs, Scrollbar]}
                className="mySwiper-thumbs"
                scrollbar={{
                    hide: false
                }}
                centeredSlides={true}
                slideToClickedSlide={true}
                watchOverflow={true}
                watchSlidesProgress={true}
            >
                {structureImages.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide2">
                        <div className='swiper-slide-thumb-active'>
                            <img src={item} className="structureImg" alt='NONE'></img>
                        </div>
                    </SwiperSlide>
                )
                )}
            </Swiper>
        </div >
    );
}
