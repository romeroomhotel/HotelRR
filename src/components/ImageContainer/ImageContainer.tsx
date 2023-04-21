import React from 'react'
import { Stack } from '../../generalGlobalComponent';
import { ImgContainer, ImgOpacity } from './ImageContainer.style';

export interface PresentationImg {
    bgImg: string;
    bigTitle: string;
    subTitle: string;
}

export default function ImageContainer({ bgImg, bigTitle, subTitle }: PresentationImg) {

    return (
        <div style={{ position: 'relative' }}>
            <ImgContainer>
                <img src={bgImg} alt="" style={{ width: '100%', height: '100%' }} />
                <ImgOpacity>
                    <h3 style={{ textAlign: "center", margin: "0", color: "#fbe0b1", textShadow: "#937251 2px 1px 2px", fontSize: '1.5rem', fontWeight: 'lighter', letterSpacing: '0.2rem' }}>{bigTitle}</h3 >
                    <h1 style={{ textAlign: "center", marginTop: "0", color: "#fbe0b1", textShadow: "#937251 2px 1px 2px", fontSize: '4rem', letterSpacing: '0.3rem' }}>{subTitle}</h1>
                </ImgOpacity>
            </ImgContainer>
        </div >
    )
}
