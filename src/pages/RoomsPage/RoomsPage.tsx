import React from 'react'
import "./RoomsPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import ShowRooms from '../../components/ShowRooms/ShowRooms';
import ImageContainer from '../../components/ImageContainer/ImageContainer';

const RoomsPage = () => {
    return (
        <div>
            <ImageContainer bgImg={''} bigTitle={''} subTitle={''}></ImageContainer>
            <ShowRooms />
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default RoomsPage;