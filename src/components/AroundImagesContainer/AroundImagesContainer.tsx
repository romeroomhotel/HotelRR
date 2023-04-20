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
                        <Stack key={index} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                            <h2 style={{ margin: '2rem', textAlign: 'left', width: '100%', paddingLeft: '5rem' }}>{item.title}</h2>
                            <Stack style={{ width: '100%', gap: '2rem', justifyContent: 'space-around' }}>
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