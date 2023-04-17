import React from 'react'
import { Stack } from '../../generalGlobalComponent'

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
                        <Stack key={index} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '0 4rem' }}>
                            <h2 style={{ margin: '2rem', textAlign: 'left', width: '100%' }}>{item.title}</h2>
                            <Stack style={{ width: '100%', gap: '2rem' }}>
                                <div>
                                    {<img src={item.img} alt="NONE" style={{ height: '400px', width: '100%' }} />}
                                </div>
                                <div style={{ width: '49%', height: '24.417rem', textAlign: 'left' }}>
                                    {item.description}
                                </div>
                            </Stack>
                        </Stack >
                    )
                })
            }
        </Stack>)
}