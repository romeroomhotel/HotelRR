import React, { useState } from 'react'
import { Stack } from '../../generalGlobalComponent';
import FsLightbox from 'fslightbox-react';
import { OurRoomsContainer, OurRoomsTitle } from './ShowRoomCatComponent.style';

export interface ShowRoomCatComponentInterface {
    roomCat: string,
    roomImages: string[]
}

export interface ShowRoomCarArrayProps {
    roomArray: ShowRoomCatComponentInterface[]
}

const ShowRoomCatComponent = () => {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number: any) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

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
                    <OurRoomsContainer>
                        <OurRoomsTitle>{room.roomCat} :</OurRoomsTitle>
                        <Stack style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', alignItems: 'stretch' }}>
                            {room.roomImages.map((img, index) => (
                                <div style={{ width: '25rem', height: '22rem' }} onClick={() => openLightboxOnSlide(index)} key={index}><img style={{ width: '100%', height: '100%', borderRadius: '10px' }} src={img} alt='none'></img></div>
                            ))}
                            <FsLightbox toggler={lightboxController.toggler}
                                sources={room.roomImages} sourceIndex={lightboxController.slide}></FsLightbox>
                        </Stack>
                    </OurRoomsContainer >
                )
                )
            }
        </Stack >
    )
}

export default ShowRoomCatComponent;