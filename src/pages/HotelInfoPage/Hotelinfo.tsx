import React, { useState } from 'react'
import "./Hotelinfo.css"
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import FooterHotel from '../../components/Footer/FooterHotel';
import Tab from '../../components/Tab/Tab';
import ImageContainer from '../../components/ImageContainer/ImageContainer';

const HotelInfo = () => {

  const hotelInfoTab = [
    {
      tabTitle: "COME RAGGIUNGERCI",
      tabId: "tab1",
      renderTabComponent: (<p>BONA1</p>)
    },
    {
      tabTitle: "SERVIZI",
      tabId: "tab2",
      renderTabComponent: (<p>BONA2</p>)
    },
    {
      tabTitle: "CONTATTI",
      tabId: "tab3",
      renderTabComponent: (<p>BONA3</p>)
    }
  ]

  return (
    <>
      <ImageContainer bgImg={'url(' + require('../../Img/ingresso-portone.jpg') + ')'} bigTitle={'roma room hotel'} subTitle={"la nostra struttura"}></ImageContainer>
      <Tab arrayTabs={hotelInfoTab}></Tab>
      <PrenotationBanner />
      <FooterHotel />
    </>
  )
}

export default HotelInfo;