import React from 'react'
import { Stack } from '../../generalGlobalComponent'
import { BookingButton, BookingLink } from './PrenotationBanner.style'

export default function PrenotationBanner() {
    return (
        <Stack style={{ flexDirection: "column", alignItems: "center", padding: "4rem 0", backgroundColor: "#f7f7f7", fontFamily: "Montserrat , sans-serif" }}>
            <h5 style={{ textAlign: "center", fontSize: "2rem", margin: "0 0 1rem 0" }}>PRENOTA DAL NOSTRO SITO UFFICIALE PER OTTENERE LA MIGLIORE TARIFFA</h5>
            <BookingButton>
                <BookingLink to={"#"}>verifica disponibiità e prenota ora - book now</BookingLink>
            </BookingButton>
        </Stack>
    )
}
