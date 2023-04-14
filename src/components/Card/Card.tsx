import React from 'react'
import { Stack } from '../../generalGlobalComponent'

export default function Card() {
    return (
        <Stack style={{ width: "23.75rem", height: "31.25rem", backgroundColor: "black", position: 'relative', borderRadius: '30px' }}>
            <Stack style={{ backgroundColor: 'red', height: "16.25rem", width: '100%', zIndex: '1', position: 'absolute', borderRadius: '30px 30px 20px 20px ' }}>

            </Stack>
            <Stack style={{ position: 'relative' }}>

            </Stack>
            <Stack style={{ flexDirection: "column", color: '#FFF', zIndex: '1', position: 'absolute', bottom: '2rem', justifyContent: 'center', alignItems: 'center', padding: '0 1.5rem', textAlign: 'center' }}>
                <h3>Lorem Ipsum</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel voluptatum esse totam? Id animi illo error facere minus. Suscipit, nostrum animi voluptas nemo quas molestiae dolor corporis! Temporibus, error?</p>
            </Stack>
        </Stack >

    )
}
