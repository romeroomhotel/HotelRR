import React from 'react'
import { Stack } from '../../generalGlobalComponent'

export default function WhereWeAtContainer() {
    return (
        <Stack style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '65vh', justifyContent: 'center', color: '#937251', fontFamily: "Montserrat , sans-serif", backgroundColor: '#FFF' }}>
            <h2 style={{
                borderBottom: '5px solid #937251', fontSize: '2.5rem', textShadow: "#fbe0b1 2px 1px 2px"
            }}>DOVE SIAMO</h2>
            <p style={{ fontSize: '1.5rem', backgroundColor: 'RGBA(251,224,177,0.9)', padding: '2rem 2rem 3rem', color: '#000' }}>
                <b>ROMA ROOM HOTEL</b> è situato nel quartiere Nomentano in <b>via morgagni 41</b>
                <br /><br />
                distante a <b>pochissimi metri</b> dalle fermate dei trasporti pubblici
                <br />
                <br />
                garantendo facilità nel raggiungerci o ad arrivare
                <br />
                <br />
                alle <b>principali attrazioni</b> che offre <b>ROMA.</b>
                <br /><br />
                <b style={{ textTransform: 'uppercase' }}>Oltretutto nel nostro Hotel è possibile usufruire del parcheggio privato interno</b>
            </p>
        </Stack >
    )
}
