import React from 'react'
import { Stack } from '../../generalGlobalComponent';

export interface ShowRoomCatComponentInterface {
    roomCat: string,
    roomImages: string[]
}

export interface ShowRoomCarArrayProps {
    roomArray: ShowRoomCatComponentInterface[]
}

const ShowRoomCatComponent = (rooms: ShowRoomCarArrayProps) => {
    return (
        <Stack style={{ width: '80%' }}>
            {
                rooms.roomArray.map((room) =>
                (
                    <Stack style={{ flexDirection: 'column', padding: '1rem', width: '100%' }}>
                        <h3>{room.roomCat} :</h3>
                        <Stack style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                            {room.roomImages.map((img, index) => (
                                <div style={{ height: '400px', flex: '33.33%' }} key={index}><img style={{ width: '90%', borderRadius: '10px' }} src={img} alt='none'></img></div>
                            ))}
                        </Stack>
                    </Stack>


                )
                )
            }
        </Stack>
    )
}

export default ShowRoomCatComponent;