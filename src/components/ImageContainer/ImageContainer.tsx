import React from 'react'
import { Stack } from '../../generalGlobalComponent';

export interface PresentationImg {
    bgImg: string;
    bigTitle: string;
    subTitle: string;
}

export default function ImageContainer({ bgImg, bigTitle, subTitle }: PresentationImg) {

    return (
        <div>
            <Stack style={{ height: '95vh', width: '100%' }}>
                <div style={{ fontFamily: "Montserrat , sans-serif", backgroundImage: bgImg, width: '100%', objectFit: 'cover', textTransform: 'uppercase' }}>
                    <Stack style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <h3 style={{ textAlign: "center", margin: "0", color: "#fbe0b1", textShadow: "#937251 2px 1px 2px", fontSize: '1.5em', fontWeight: 'lighter', letterSpacing: '0.2rem' }}>{bigTitle}</h3 >
                        <h1 style={{ textAlign: "center", marginTop: "0", color: "#fbe0b1", textShadow: "#937251 2px 1px 2px", fontSize: '4rem', letterSpacing: '0.3rem' }}>{subTitle}</h1>
                    </Stack>
                </div>
            </Stack >
        </div >
    )
}
