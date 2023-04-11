import React from 'react'
import "./AroundPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import PresentationImage from '../../components/PresentationImage/PresentationImage';

const AroundPage = () => {
    return (
        <div>
            <PresentationImage />
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default AroundPage;