import React from 'react'
import { Stack } from '../../generalGlobalComponent'

export default function TabContatcs() {
    return (
        <Stack style={{ flexDirection: 'column', padding: '2rem' }}>
            <h2>CONTATTI</h2>
            <Stack style={{ textTransform: 'uppercase', fontFamily: "Montserrat", flexDirection: 'column' }}>
                <p>
                    CI TROVIAMO IN VIA GIOVANNI BATTISTA MORGAGNI, 41, 00161 Roma RM
                </p>
                <p>
                    RECEPTION APERTA 7:30 - 22:00
                </p>
                <p>
                    NUMERO DI TELEFONO: 06 4426 0772
                </p>
                <p>
                    NON SONO AMMESSI ANIMALI
                </p>
                <p>
                    ORARI CHECK-IN: 14:00-23:00 ORARIO CHECK-OUT: 11:00
                </p>
                <p>
                    Al check-in gli ospiti devono esibire un documento d'identità con foto e una carta di credito. Siete pregati di notare che le Richieste Speciali sono soggette a disponibilità, e potrebbero comportare l'addebito di un supplemento.
                </p>
            </Stack>
        </Stack>
    )
}
