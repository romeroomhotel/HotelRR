import React from 'react'
import "./Homepage.css"
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import FooterHotel from '../../components/Footer/FooterHotel';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import WhereWeAtContainer from '../../components/WhereWeAtContainer/WhereWeAtContainer';
import StructureCarousel from '../../components/StructureCarousel/StructureCarousel';

const HomePage = () => {

    return (
        <>
            <ImageContainer bgImg={'url(' + require('../../Img/Hotel.jpg') + ')'} bigTitle='BENVENUTI' subTitle='ROMA ROOM HOTEL'></ImageContainer >
            <WhereWeAtContainer />
            <ServicesBanner />
            <PrenotationBanner />
            <FooterHotel />
            <StructureCarousel />
        </>
    )
}

export default HomePage;