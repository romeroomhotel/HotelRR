import React from 'react'
import "./InfoUtilPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import PresentationImage from '../../components/PresentationImage/PresentationImage';
import InfoTabWrapper from '../../components/InfoTabWrapper/InfoTabWrapper';

const InfoUtilsPage = () => {
    return (
        <div>
            <PresentationImage />
            <InfoTabWrapper />
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default InfoUtilsPage;