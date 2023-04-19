import React from 'react'
import "./Homepage.css"
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import FooterHotel from '../../components/Footer/FooterHotel';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import WhereWeAtContainer from '../../components/WhereWeAtContainer/WhereWeAtContainer';

const HomePage = () => {

    return (
        <>
            <ImageContainer bgImg={require('../../Img/Optimized-facciataprincipale.jpg')} bigTitle='BENVENUTI' subTitle='ROMA ROOM HOTEL'></ImageContainer >
            <WhereWeAtContainer />
            <ServicesBanner />
            <PrenotationBanner />
            <FooterHotel />
        </>
    )
}

export default HomePage;