import React from 'react'
import { WWAcontainer } from './WhereWeAtContainer.style'

export default function WhereWeAtContainer() {
    return (
        <WWAcontainer>
            <h2 className="WWAh2">DOVE SIAMO</h2>
            <p className='WWAp'>
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
        </WWAcontainer >
    )
}
