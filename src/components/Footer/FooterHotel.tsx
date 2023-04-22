import React from 'react'
import { Stack } from '../../generalGlobalComponent'
import { FTextContainer } from './FooterHotel.style'

export default function FooterHotel() {
    return (
        <div style={{
            backgroundColor: "#fbe0b1", fontFamily: "Montserrat , sans-serif",
        }}>
            < Stack style={{
                justifyContent: "space-around", alignItems: "center", padding: "1.5rem",
            }}>
                <FTextContainer>
                    <h4 style={{ marginBottom: '1rem' }}>IL NOSTRO HOTEL</h4>
                    <p className='footerP'>ROMA ROOM HOTEL è situato nel quartiere Nomentano in via morgagni 41

                        distante a pochissimi metri dalle fermate dei trasporti pubblici

                        garantendo facilità nel raggiungerci o ad arrivare

                        alle principali attrazioni che offre ROMA.

                        OLTRETUTTO NEL NOSTRO HOTEL È POSSIBILE USUFRUIRE DEL PARCHEGGIO PRIVATO INTERNO</p>
                </FTextContainer>
            </Stack >
            <Stack style={{ justifyContent: "space-between", alignItems: "center", backgroundColor: "#937251", fontSize: "0.8rem", padding: '0.5rem 1rem' }}>
                <p style={{ marginRight: '0.5rem' }}>© COPYRIGHT ROMA ROOM HOTEL </p>

                <Stack style={{ paddingRight: '2.5rem' }}>
                    <a href="https://www.iubenda.com/privacy-policy/79934061"
                        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>

                    <a href="https://www.iubenda.com/termini-e-condizioni/79934061"
                        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Termini e Condizioni ">Termini e
                        Condizioni</a>
                </Stack>
            </Stack>
        </div >
    )
}
