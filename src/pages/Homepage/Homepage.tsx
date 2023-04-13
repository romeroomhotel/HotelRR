import React from 'react'
import "./Homepage.css"
// import PresentationImage from '../../components/PresentationImage/PresentationImage';
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import FooterHotel from '../../components/Footer/FooterHotel';
import ImageContainer from '../../components/ImageContainer/ImageContainer';

const HomePage = () => {

    return (
        <>
            <ImageContainer bgImg={'url(' + require('../../Img/Hotel.jpg') + ')'} bigTitle='BENVENUTI' subTitle='ROMA ROOM HOTEL'></ImageContainer >
            <ServicesBanner />
            <PrenotationBanner />
            <FooterHotel />
        </>
    )
}

export default HomePage;