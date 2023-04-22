import React from 'react'
import { Stack } from '../../generalGlobalComponent'
import { AroundImagesDiv, AroundImagesText } from './AroundImagesContainer.style'

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
                                <div>
                                    {<img src={item.img} alt="NONE" style={{ height: '400px', width: '100%' }} />}
                                </div>
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