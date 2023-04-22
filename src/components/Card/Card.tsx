import React from 'react'
import { Stack } from '../../generalGlobalComponent'
import { CardContainer, CardImg, CardText } from './Card.style'

interface CardInterface {
    title: string,
    text: string,
    img: string
}

export default function Card(cardData: CardInterface) {
    return (
        <CardContainer>
            <CardImg>
                <img src={cardData.img} style={{ width: '100%', height: '100%' }} alt="NONE" />
            </CardImg>
            <Stack style={{ position: 'relative' }}>
            </Stack>
            <CardText>
                <h3 style={{ marginBottom: '1rem' }}>{cardData.title}</h3>
                <p>{cardData.text}</p>
            </CardText>
        </CardContainer >

    )
}
