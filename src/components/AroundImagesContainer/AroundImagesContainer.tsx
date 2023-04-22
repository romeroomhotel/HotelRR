import React from 'react'
import { Stack } from '../../generalGlobalComponent'
import { AroundImagesDiv, AroundImagesText, ImgAround } from './AroundImagesContainer.style'

export interface AroundDataInterface {
    title: string,
    img: string,
    description: string
}

export interface AroundDataArrayProps {
    datas: AroundDataInterface[]
}

export const AroundImagesContainer = (data: AroundDataArrayProps) => {
    return (
        <Stack style={{ flexDirection: 'column' }}>
            {
                data.datas.map((item, index) => {
                    return (
                        <Stack key={index} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                            <h2 style={{ margin: '2rem', textAlign: 'left', width: '100%' }}>{item.title}</h2>
                            <AroundImagesDiv>
                                <ImgAround>
                                    {<img src={item.img} alt="NONE" style={{ height: '100%', width: '100%' }} />}
                                </ImgAround>
                                <AroundImagesText>
                                    {item.description}
                                </AroundImagesText>
                            </AroundImagesDiv>
                        </Stack >
                    )
                })
            }
        </Stack>)
}