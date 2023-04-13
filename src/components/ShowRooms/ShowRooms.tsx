import React from 'react'
import { Stack } from '../../generalGlobalComponent'

export default function ShowRooms() {
    return (
        <div style={{ fontFamily: "Montserrat , sans-serif", padding: "5rem 0" }}>
            <Stack style={{ justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <h3>
                    IL NOSTRO HOTEL OFFRE LE SEGUENTI TIPOLIGIE DI CAMERE
                </h3>
                <ul>
                    <li>CAMERA MATRIMONIALE ELEGANTE</li>
                    <li>CAMERA TRIPLA ELEGANTE</li>
                    <li>CAMERA MATRIMONIALE DOUBLE SINGLE BED</li>
                    <li>CAMERA MATRIMONIALE PICCOLA</li>
                    <li>CAMERA SINGOLA</li>
                    <li>CAMERA MATRIMONIALE</li>
                    <li>CAMERA TRIPLA</li>
                    <li>CAMERA QUADRUPLA</li>
                </ul>
            </Stack>
            <Stack>
                {/* Crea array di immagini e ciclale per renderizzare lo showRooom */}
            </Stack>
        </div>
    )
}
