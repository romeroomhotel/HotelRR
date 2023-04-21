import React from 'react'
import { Stack } from '../../generalGlobalComponent'
import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import { SliderData } from '../Carousel/CarouselData'

export default function FooterHotel() {
    return (
        <div style={{
            backgroundColor: "#fbe0b1", fontFamily: "Montserrat , sans-serif",
        }}>
            < Stack style={{
                justifyContent: "space-around", alignItems: "center", padding: "1.5rem",
            }}>
                <Stack style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: "30rem" }}>
                    <h4>IL NOSTRO HOTEL</h4>
                    <p style={{ textAlign: 'justify' }}>ROMA ROOM HOTEL è situato nel quartiere Nomentano in via morgagni 41

                        distante a pochissimi metri dalle fermate dei trasporti pubblici

                        garantendo facilità nel raggiungerci o ad arrivare

                        alle principali attrazioni che offre ROMA.

                        OLTRETUTTO NEL NOSTRO HOTEL È POSSIBILE USUFRUIRE DEL PARCHEGGIO PRIVATO INTERNO</p>
                </Stack>
                <Carousel slides={SliderData} />
            </Stack >
            <Stack style={{ justifyContent: "start", alignItems: "center", backgroundColor: "#937251", fontSize: "0.8rem", padding: '0.5rem 1rem' }}>
                <p style={{ marginRight: '0.5rem' }}>© COPYRIGHT ROMA ROOM HOTEL - </p>
                <Link to={"#"}>informativa privacy e cookie policy</Link>
            </Stack>
        </div >
    )
}
