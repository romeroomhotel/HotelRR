import React from 'react'
import "./Hotelinfo.css"
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import FooterHotel from '../../components/Footer/FooterHotel';
import Tab from '../../components/Tab/Tab';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import StructureCarousel from '../../components/StructureCarousel/StructureCarousel';

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
      <ImageContainer bgImg={require('../../Img/facciataentrata.jpg')} bigTitle={'roma room hotel'} subTitle={"la nostra struttura"}></ImageContainer>
      <StructureCarousel />
      <Tab arrayTabs={hotelInfoTab} />
      <PrenotationBanner />
      <FooterHotel />
    </>
  )
}

export default HotelInfo;