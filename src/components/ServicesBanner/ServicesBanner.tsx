import React from 'react'
import { Stack } from '../../generalGlobalComponent';
import Card from '../Card/Card';

const ServicesBanner = () => {
    return (
        <Stack style={{ flexDirection: 'column', backgroundColor: '#f7f7f7' }}>
            <h2 style={{ textAlign: 'center', margin: '3rem auto 0', fontSize: '2.5rem', textShadow: "#fbe0b1 2px 1px 2px", color: '#937251' }}>INFORMAZIONI GENERICHE</h2>
            <Stack style={{ justifyContent: 'center', gap: '8rem', padding: "5em 0 15rem", fontFamily: "Montserrat , sans-serif" }}>
                <Card img={require("../../Img/receptionInfo.JPG")} title='RECEPTION' text='Reception aperta dalle 7.30 alle 22.00 , Eventuali check-in in orari diversi vanno prima concordati con la reception per verificare la disponibilità.' />
                <Card img={require("../../Img/parcheggioInterno.jpg")} title='PARCHEGGIO' text='Parcheggio interno privato a prenotazione.' />
                <Card img={require("../../Img/Optimized-lettomatrimoniale.jpg")} title='CAMERE' text='Le camere sono dotate di climatizzazione, Wi-Fi gratuita, bagno privato con doccia, asciugacapelli e set di cortesia, cassaforte, scrivania, frigo.' />
            </Stack>
        </Stack>
    )
}

export default ServicesBanner;