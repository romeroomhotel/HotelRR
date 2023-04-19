import React from 'react'
import "./RoomsPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import ShowRooms from '../../components/ShowRoomsPage/ShowRoomsPage';
import ImageContainer from '../../components/ImageContainer/ImageContainer';


const RoomsPage = () => {
    return (
        <div style={{ position: 'relative' }}>
            <ImageContainer bgImg={require('../../Img/lettomatrimoniale.jpg')} bigTitle={'roma room hotel'} subTitle={'le nostre camere'}></ImageContainer>
            <ShowRooms />
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default RoomsPage;