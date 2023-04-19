import React from 'react'
import { Stack } from '../../generalGlobalComponent'
import ShowRoomCatComponent, { ShowRoomCatComponentInterface } from '../ShowRoomCatComponent/ShowRoomCatComponent'
import './ShowRoomsPage'

export default function ShowRooms() {

    const singleBed: ShowRoomCatComponentInterface[] = [
        {
            roomCat: 'CAMERA LETTO SINGOLO',
            roomImages: [
                require('../../Img/singola.jpg'), require('../../Img/bagnosingolo.jpg'), require('../../Img/bagnosingolo 2.jpg'),
            ]
        }
    ]

    const twoBed: ShowRoomCatComponentInterface[] = [
        {
            roomCat: 'CAMERA MATRIMONIALE',
            roomImages: [
                require('../../Img/lettomatrimoniale.jpg'), require('../../Img/MatrimonialePiccolo.jpg'), require('../../Img/matrimoniale (2).jpg'), require('../../Img/matrimoniale.jpg'), require('../../Img/matrimoniale-piccolo.jpg'),
            ]
        }
    ]

    const threeBed: ShowRoomCatComponentInterface[] = [
        {
            roomCat: 'CAMERA TRIPLA',
            roomImages: [
                require('../../Img/tripla.jpg')
            ]
        }
    ]

    const fourBed: ShowRoomCatComponentInterface[] = [
        {
            roomCat: 'CAMERA QUADRUPLA',
            roomImages: [
                require('../../Img/quadrupla.jpg'),
            ]
        }
    ]

    return (
        <div style={{ fontFamily: "Montserrat , sans-serif", padding: "5rem 0", backgroundColor: '#f7f7f7' }}>
            <Stack style={{ justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <h3 style={{ fontSize: '2.5rem', textShadow: "#fbe0b1 2px 1px 2px", color: '#937251' }}>
                    IL NOSTRO HOTEL OFFRE LE SEGUENTI TIPOLIGIE DI CAMERE
                </h3>
                <ShowRoomCatComponent roomArray={singleBed} />
                <ShowRoomCatComponent roomArray={twoBed} />
                <ShowRoomCatComponent roomArray={threeBed} />
                <ShowRoomCatComponent roomArray={fourBed} />
            </Stack>
        </div>
    )
}
