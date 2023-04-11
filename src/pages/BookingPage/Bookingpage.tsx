import React from 'react'
import "./Bookingpage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import PresentationImage from '../../components/PresentationImage/PresentationImage';

const BookNowPage = () => {
    return (
        <div>
            <PresentationImage />
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default BookNowPage;