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
            <Stack style={{ height: '120vh', position: 'relative', fontFamily: "Montserrat , sans-serif", textTransform: 'uppercase' }}>
                <img src={bgImg} alt="" style={{ width: '100%' }} />
                <Stack style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "center", alignItems: "center", flexDirection: "column", position: 'absolute', zIndex: '1' }}>
                    <h3 style={{ textAlign: "center", margin: "0", color: "#fbe0b1", textShadow: "#937251 2px 1px 2px", fontSize: '1.5em', fontWeight: 'lighter', letterSpacing: '0.2rem' }}>{bigTitle}</h3 >
                    <h1 style={{ textAlign: "center", marginTop: "0", color: "#fbe0b1", textShadow: "#937251 2px 1px 2px", fontSize: '4rem', letterSpacing: '0.3rem' }}>{subTitle}</h1>
                </Stack>
            </Stack >
        </div >
    )
}
