import React from 'react'
import "./Homepage.css"
import HotelNav from '../../components/Navbar/HotelNav';
import Carousel from '../../components/Carousel/Carousel';
import { SliderData } from '../../components/Carousel/CarouselData';
import PresentationImage from '../../components/PresentationImage/PresentationImage';

const HomePage = () => {

    return (
        <>
            <HotelNav />
            <PresentationImage />
            <Carousel slides={SliderData} />
        </>
    )
}

export default HomePage;