import React from 'react'
import { BookingButton, BookingLink, PrenotationBannerContainer } from './PrenotationBanner.style'

export default function PrenotationBanner() {
    return (
        <PrenotationBannerContainer>
            <h5 className='' style={{ textAlign: "center", fontSize: "2rem", margin: "0 0 1rem 0" }}>PRENOTA DAL NOSTRO SITO UFFICIALE</h5>
            <BookingButton>
                <BookingLink to={"#"}>verifica disponibiità e prenota ora - ottendendo così la miglior tariffa </BookingLink>
            </BookingButton>
        </PrenotationBannerContainer>
    )
}
