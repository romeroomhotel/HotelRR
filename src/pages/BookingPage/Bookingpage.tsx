import React from 'react'
import "./Bookingpage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';

const BookNowPage = () => {
    return (
        <div>
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default BookNowPage;