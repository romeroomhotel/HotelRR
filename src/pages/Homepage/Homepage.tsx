import React from 'react'
import "./Homepage.css"
import PresentationImage from '../../components/PresentationImage/PresentationImage';
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import FooterHotel from '../../components/Footer/FooterHotel';

const HomePage = () => {

    return (
        <>
            <PresentationImage />
            <ServicesBanner />
            <PrenotationBanner />
            <FooterHotel />
        </>
    )
}

export default HomePage;