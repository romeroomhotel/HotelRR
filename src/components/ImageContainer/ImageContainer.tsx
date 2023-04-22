import React from 'react'
import { ImgContainer, ImgOpacity } from './ImageContainer.style';

export interface PresentationImg {
    bgImg: string;
    bigTitle: string;
    subTitle: string;
}

export default function ImageContainer({ bgImg, bigTitle, subTitle }: PresentationImg) {

    return (
        <div style={{ paddingTop: '2rem' }}>
            <ImgContainer>
                <img src={bgImg} alt="" style={{ width: '100%', height: '100%' }} />
                <ImgOpacity>
                    <h3 className='smallTitle'>{bigTitle}</h3 >
                    <h1 className='bigTitle'>{subTitle}</h1>
                </ImgOpacity>
            </ImgContainer>
        </div >
    )
}
