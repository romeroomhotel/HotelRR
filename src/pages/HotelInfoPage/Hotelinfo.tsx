import React from 'react'
import "./Hotelinfo.css"
import PresentationImage from '../../components/PresentationImage/PresentationImage';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import FooterHotel from '../../components/Footer/FooterHotel';
import TabWrapper from '../../components/HotelTabWrapper/HotelTabWrapper';

const HotelInfo = () => {
  return (
    <div>
      <PresentationImage />
      <TabWrapper />
      <PrenotationBanner />
      <FooterHotel />
    </div>
  )
}

export default HotelInfo;