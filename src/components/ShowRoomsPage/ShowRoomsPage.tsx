import React from 'react'
import { Stack } from '../../generalGlobalComponent'
import ShowRoomCatComponent, { ShowRoomCatComponentInterface } from '../ShowRoomCatComponent/ShowRoomCatComponent'

export default function ShowRooms() {

    const singleBed: ShowRoomCatComponentInterface[] = [
        {
            roomCat: 'CAMERA LETTO SINGOLO',
            roomImages: [
                require('../../Img/stanza1.jpg'), require('../../Img/stanza1.jpg'), require('../../Img/stanza1.jpg'),
                require('../../Img/stanza1.jpg'), require('../../Img/stanza1.jpg'), require('../../Img/stanza1.jpg'),
            ]
        }
    ]

    const twoBed: ShowRoomCatComponentInterface[] = [
        {
            roomCat: 'CAMERA DOPPIA',
            roomImages: [
                require('../../Img/stanza1.jpg'), require('../../Img/stanza1.jpg'), require('../../Img/stanza1.jpg')
            ]
        }
    ]

    const threeBed: ShowRoomCatComponentInterface[] = [
        {
            roomCat: 'CAMERA TRIPLA',
            roomImages: [
                require('../../Img/stanza1.jpg'), require('../../Img/stanza1.jpg'), require('../../Img/stanza1.jpg')
            ]
        }
    ]

    const fourBed: ShowRoomCatComponentInterface[] = [
        {
            roomCat: 'CAMERA QUADRUPLA',
            roomImages: [
                require('../../Img/stanza1.jpg'), require('../../Img/stanza1.jpg'), require('../../Img/stanza1.jpg')
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
