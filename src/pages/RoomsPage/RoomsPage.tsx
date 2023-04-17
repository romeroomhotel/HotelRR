import React from 'react'
import "./RoomsPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import ShowRooms from '../../components/ShowRoomsPage/ShowRoomsPage';
import ImageContainer from '../../components/ImageContainer/ImageContainer';

const RoomsPage = () => {
    return (
        <div>
            <ImageContainer bgImg={'url(' + require('../../Img/stanza3.jpg') + ')'} bigTitle={'roma room hotel'} subTitle={'le nostre camere'}></ImageContainer>
            <ShowRooms />
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default RoomsPage;