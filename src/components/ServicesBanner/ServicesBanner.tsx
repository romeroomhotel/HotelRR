import React from 'react'
import { Stack } from '../../generalGlobalComponent';
import Card from '../Card/Card';

const ServicesBanner = () => {
    return (
        <Stack style={{ flexDirection: 'column', backgroundColor: '#f7f7f7' }}>
            <h2 style={{ textAlign: 'center', margin: '3rem auto 0' }}>INFORMAZIONI GENERICHE</h2>
            <Stack style={{ justifyContent: 'center', gap: '8rem', padding: "5em 0 15rem", fontFamily: "Montserrat , sans-serif" }}>
                <Card />
                <Card />
                <Card />
            </Stack>
        </Stack>
    )
}

export default ServicesBanner;