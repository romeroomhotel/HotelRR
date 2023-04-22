import React from 'react'
import { Stack } from '../../generalGlobalComponent'
// import ShowRoomCatComponent, { ShowRoomCatComponentInterface } from '../ShowRoomCatComponent/ShowRoomCatComponent'
import './ShowRoomsPage'
import ShowRoomCatComponent from '../ShowRoomCatComponent/ShowRoomCatComponent'
import { H3roomsTitle } from './ShowRoomsPage.style'

export default function ShowRooms() {

    return (
        <div style={{ fontFamily: "Montserrat , sans-serif", padding: "5rem 0", backgroundColor: '#f7f7f7' }}>
            <Stack style={{ justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <H3roomsTitle>
                    IL NOSTRO HOTEL OFFRE LE SEGUENTI TIPOLIGIE DI CAMERE
                </H3roomsTitle>
                <ShowRoomCatComponent />
            </Stack>
        </div>
    )
}
