import React from 'react'
import "./InfoUtilPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import Tab from '../../components/Tab/Tab';
import ImageContainer from '../../components/ImageContainer/ImageContainer';

const InfoUtilsPage = () => {

    const infoUtilTabArray = [
        {
            tabTitle: "TRASPORTI PUBBLICI",
            tabId: "tab1",
            renderTabComponent: (<p>TRANSFORMERS</p>)
        },
        {
            tabTitle: "TAXI",
            tabId: "tab2",
            renderTabComponent: (<p>GTA MODE</p>)
        },
    ]

    return (
        <div>
            <ImageContainer bgImg={'url(' + require('../../Img/colazione.jpg') + ')'} bigTitle={'roma room hotel'} subTitle={'informazioni utili'}></ImageContainer>
            <Tab arrayTabs={infoUtilTabArray}></Tab>
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default InfoUtilsPage;