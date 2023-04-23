import React from 'react'
import "./RoomsPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import ShowRooms from '../../components/ShowRoomsPage/ShowRoomsPage';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import HotelNav from '../../components/Navbar/HotelNav';
import ScrollTop from '../../components/ScrollTop/ScrollTop';


const RoomsPage = () => {
    return (
        <div style={{ position: 'relative' }}>
            <HotelNav />
            <ImageContainer bgImg={require('../../Img/Optimized-lettomatrimoniale.jpg')} bigTitle={'roma room hotel'} subTitle={'le nostre camere'}></ImageContainer>
            <ShowRooms />
            <PrenotationBanner />
            <FooterHotel />
            <ScrollTop />
        </div>
    )
}

export default RoomsPage;