import React from 'react'
import "./AroundPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import ImageContainer from '../../components/ImageContainer/ImageContainer';

const AroundPage = () => {
    return (
        <div>
            <ImageContainer bgImg={''} bigTitle={''} subTitle={''}></ImageContainer>
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default AroundPage;