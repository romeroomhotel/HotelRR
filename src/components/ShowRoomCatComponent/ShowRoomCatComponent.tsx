import React, { useState } from 'react'
import { Stack } from '../../generalGlobalComponent';
import FsLightbox from 'fslightbox-react';

export interface ShowRoomCatComponentInterface {
    roomCat: string,
    roomImages: string[]
}

export interface ShowRoomCarArrayProps {
    roomArray: ShowRoomCatComponentInterface[]
}

const ShowRoomCatComponent = () => {

    const [toggler, setToggler] = useState(false);

    const singleBed = [
        {
            roomCat: 'LE NOSTRE CAMERE',
            roomImages: [
                require('../../Img/Optimized3-singola.jpg'), require('../../Img/Optimized3-bagnosingolo.jpg'), require('../../Img/Optimized3-bagnosingolo 2.jpg'), require('../../Img/Optimized3-lettomatrimoniale.jpg'), require('../../Img/Optimized3-MatrimonialePiccolo.jpg'), require('../../Img/Optimized3-matrimoniale2.jpg'), require('../../Img/matrimoniale.jpg'), require('../../Img/Optimized3-matrimoniale-piccolo.jpg'), require('../../Img/Optimized3-tripla.jpg'), require('../../Img/Optimized3-tripla2.jpg'), require('../../Img/Optimized3-quadrupla.jpg'),
            ]
        }
    ]

    return (
        <Stack style={{ width: '80%' }}>
            {
                singleBed.map((room) =>
                (
                    <Stack style={{ flexDirection: 'column', padding: '1rem', width: '100%', backgroundColor: '#fbe0b1' }}>
                        <h3 style={{ textAlign: 'center' }}>{room.roomCat} :</h3>
                        <Stack style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'stretch' }}>
                            {room.roomImages.map((img, index) => (
                                <div style={{ width: '25rem' }} onClick={() => setToggler(!toggler)} key={index}><img style={{ width: '100%', borderRadius: '10px' }} src={img} alt='none'></img></div>
                            ))}
                        </Stack>
                    </Stack>
                )
                )
            }
            <FsLightbox toggler={toggler}
                sources={[require('../../Img/Optimized3-singola.jpg'), require('../../Img/Optimized3-bagnosingolo.jpg'), require('../../Img/Optimized3-bagnosingolo 2.jpg'), require('../../Img/Optimized3-lettomatrimoniale.jpg'), require('../../Img/Optimized3-MatrimonialePiccolo.jpg'), require('../../Img/Optimized3-matrimoniale2.jpg'), require('../../Img/matrimoniale.jpg'), require('../../Img/Optimized3-matrimoniale-piccolo.jpg'), require('../../Img/Optimized3-tripla.jpg'), require('../../Img/Optimized3-tripla2.jpg'), require('../../Img/Optimized3-quadrupla.jpg')]}></FsLightbox>
        </Stack>
    )
}

export default ShowRoomCatComponent;