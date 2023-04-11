import React from 'react'
import "./RoomsPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import PresentationImage from '../../components/PresentationImage/PresentationImage';
import RoomShowRoom from '../../components/RoomShowRoom/RoomShowRoom';

const RoomsPage = () => {
    return (
        <div>
            <PresentationImage />
            <RoomShowRoom />
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default RoomsPage;