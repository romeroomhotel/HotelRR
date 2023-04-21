import React from 'react'
import "./InfoUtilPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import Tab from '../../components/Tab/Tab';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import TabCommute from '../../components/TabCommute/TabCommute';
import TabTaxi from '../../components/TabTaxi/TabTaxi';
import HotelNav from '../../components/Navbar/HotelNav';

const InfoUtilsPage = () => {

    const infoUtilTabArray = [
        {
            tabTitle: "TRASPORTI PUBBLICI",
            tabId: "tab1",
            renderTabComponent: (<TabCommute />)
        },
        {
            tabTitle: "SERVIZIO TAXI",
            tabId: "tab2",
            renderTabComponent: (<TabTaxi />)
        },
    ]

    return (
        <div>
            <HotelNav />
            <ImageContainer bgImg={require('../../Img/Optimized-lampade.jpg')} bigTitle={'roma room hotel'} subTitle={'informazioni utili'}></ImageContainer>
            <Tab arrayTabs={infoUtilTabArray}></Tab>
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default InfoUtilsPage;