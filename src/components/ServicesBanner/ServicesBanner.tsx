import React from 'react'
import Card from '../Card/Card';
import { ServiceBannerContainer, ServiceCardContainer, Serviceh2 } from './ServiceBanner.style';

const ServicesBanner = () => {
    return (
        <ServiceBannerContainer>
            <Serviceh2>INFORMAZIONI GENERICHE</Serviceh2>
            <ServiceCardContainer>
                <Card img={require("../../Img/receptionInfo.JPG")} title='RECEPTION' text='Reception aperta dalle 7 alle 23.00 , Eventuali check-in in orari diversi vanno prima concordati con la reception per verificare la disponibilità.' />
                <Card img={require("../../Img/parcheggioInterno.jpg")} title='PARCHEGGIO' text='Parcheggio interno privato prenotabile a €15 per notte. per ulteriori informazioni contattaci. altrimenti nelle vicinanze è presente un parcheggio custodito 24h in via giorgio baglivi 4 a 50 metri dalla struttura.' />
                <Card img={require("../../Img/Optimized-lettomatrimoniale.jpg")} title='CAMERE' text='Le camere sono dotate di climatizzazione, Wi-Fi gratuita, bagno privato con doccia, asciugacapelli e set di cortesia, cassaforte, scrivania, frigo.' />
            </ServiceCardContainer>
        </ServiceBannerContainer>
    )
}

export default ServicesBanner;