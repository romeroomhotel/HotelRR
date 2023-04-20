import React from 'react'
import { Stack } from '../../generalGlobalComponent'

interface CardInterface {
    title: string,
    text: string,
    img: string
}

export default function Card(cardData: CardInterface) {
    return (
        <Stack style={{ width: "23.75rem", height: "31.25rem", backgroundColor: "#937251", position: 'relative' }}>
            <Stack style={{ height: "16.25rem", width: '100%', zIndex: '1', position: 'absolute' }}>
                <img src={cardData.img} style={{ width: '100%' }} alt="NONE" />
            </Stack>
            <Stack style={{ position: 'relative' }}>
            </Stack>
            <Stack style={{ flexDirection: "column", color: '#FFF', zIndex: '1', position: 'absolute', top: '55%', justifyContent: 'flex-start', alignItems: 'center', padding: '0 1.5rem' }}>
                <h3>{cardData.title}</h3>
                <p>{cardData.text}</p>
            </Stack>
        </Stack >

    )
}
