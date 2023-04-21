import React from 'react'
import "./Hotelinfo.css"
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import FooterHotel from '../../components/Footer/FooterHotel';
import Tab from '../../components/Tab/Tab';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import StructureCarousel from '../../components/StructureCarousel/StructureCarousel';
import TabHowTo from '../../components/TabHowTo/TabHowTo';
import TabServices from '../../components/TabServices/TabServices';
import TabContatcs from '../../components/TabContatcs/TabContatcs';

const HotelInfo = () => {

  const hotelInfoTab = [
    {
      tabTitle: "COME RAGGIUNGERCI",
      tabId: "tab1",
      renderTabComponent: (
        <TabHowTo />
      )
    },
    {
      tabTitle: "SERVIZI",
      tabId: "tab2",
      renderTabComponent: (<TabServices />)
    },
    {
      tabTitle: "CONTATTI",
      tabId: "tab3",
      renderTabComponent: (<TabContatcs />)
    }
  ]

  return (
    <>
      <ImageContainer bgImg={require('../../Img/Optimized-facciataentrata.jpg')} bigTitle={'roma room hotel'} subTitle={"la nostra struttura"}></ImageContainer>
      <StructureCarousel />
      <Tab arrayTabs={hotelInfoTab} />
      <PrenotationBanner />
      <FooterHotel />
    </>
  )
}

export default HotelInfo;