import React from 'react'
import { Stack } from '../../generalGlobalComponent'
// import ShowRoomCatComponent, { ShowRoomCatComponentInterface } from '../ShowRoomCatComponent/ShowRoomCatComponent'
import './ShowRoomsPage'
import ShowRoomCatComponent from '../ShowRoomCatComponent/ShowRoomCatComponent'

export default function ShowRooms() {

    return (
        <div style={{ fontFamily: "Montserrat , sans-serif", padding: "5rem 0", backgroundColor: '#f7f7f7' }}>
            <Stack style={{ justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <h3 style={{ fontSize: '2.5rem', textShadow: "#fbe0b1 2px 1px 2px", color: '#937251' }}>
                    IL NOSTRO HOTEL OFFRE LE SEGUENTI TIPOLIGIE DI CAMERE
                </h3>
                <ShowRoomCatComponent />
            </Stack>
        </div>
    )
}
