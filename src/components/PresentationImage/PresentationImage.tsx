import React from 'react'
import { Stack } from '../../generalGlobalComponent'

export default function PresentationImage() {
    return (
        <Stack style={{ height: '82vh', width: '100%' }}>
            <div style={{ fontFamily: "Montserrat , sans-serif", backgroundImage: 'url(' + require('../../Img/Hotel.jpg') + ')', width: '100%', objectFit: 'cover' }}>
                <Stack style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <h3 style={{ textAlign: "center", margin: "0", color: "#fbe0b1", textShadow: "#937251 2px 1px 2px" }}>BENVENUTI</h3 >
                    <h1 style={{ textAlign: "center", marginTop: "0", color: "#fbe0b1", textShadow: "#937251 2px 1px 2px" }}>ROMA ROOM HOTEL</h1>
                    <Stack style={{ justifyContent: "center", gap: "15rem", paddingTop: "1rem" }}>
                        {/* <div>
                    <img src={require("../../Img/Hotel.jpg")} alt='None' style={{ borderRadius: "10px", height: "700px" }} />
                </div> */}
                    </Stack>
                </Stack>
            </div>
        </Stack >
    )
}
