import React from 'react'
import { Stack } from '../../generalGlobalComponent'

export default function TabCommute() {
    return (
        <Stack style={{ flexDirection: 'column', padding: '2rem', fontFamily: 'MontSerrat' }}>
            <h2>TRASPORTI PUBBLICI</h2>
            <Stack className='publicContainer'>
                <h3>LINEA A: Anagnina-Battistini</h3>
                <p>prima partenza 5:30</p>
                <p>ultima partenza 23:30 (venerdì e sabato 1:30)</p>
            </Stack>
            <Stack className='publicContainer'>
                <h3>LINEA B: Laurentina-Rebibbia</h3>
                <p>prima partenza 5:30</p>
                <p>ultima partenza 23:30 (venerdì e sabato 1:30)</p>
            </Stack>
            <Stack className='publicContainer'>
                <h3>LINEA B1: Laurentina-Jonio</h3>
                <p>prima partenza 5:33</p>
                <p>ultima partenza 23:27 – da Jonio 23:24 (venerdì e sabato 1:30)</p>
                <h4>LINEA C: Pantano-San Giovanni  </h4>
                <p>prima partenza 5:30</p>
                <p>ultima partenza 23:30 (venerdì e sabato 1:30)</p>
            </Stack>
            <Stack className='publicContainer'>
                <h3>ROMA-LIDO</h3>
                <p>prima partenza 5:08 (da Ostia 5:15)</p>
                <p>ultima partenza 23:30</p>
            </Stack>
            <Stack className='publicContainer'>
                <h3>TERMINI-CENTOCELLE</h3>
                <p>prima partenza 5:30 (da Centocelle 5:03)</p>
                <p>ultima partenza 22:50 (da Centocelle 22:23)</p>
            </Stack>
            <Stack className='publicContainer'>
                <h4>BUS E TRAM</h4>
                <p>Bus e tram operano anch’essi dalle 5:30 del mattino fino alla mezzanotte. Dalla mezzanotte e trenta fino alle 5:30 del mattino invece operano oltre 20 linee di bus notturni, i cui terminal principali sono Termini (Piazza del Cinquecento) e Piazza Venezia. Le fermate dei bus notturni sono contrassegnate dal simbolo del gufo e i biglietti si possono acquistare a bordo al prezzo di 1,00 Euro.</p>
            </Stack>
            <Stack className='publicContainer'>
                <ul>
                    <li>BIT (€ 1,50) valido per 100 minuti dalla prima timbratura; in metropolitana vale per una sola corsa, anche su più linee, senza uscire dai tornelli</li>
                    <li>ROMA 24H (€ 7,00) valido 24 ore dalla prima timbratura e per un numero illimitato di viaggi nel territorio di roma capitale</li>
                    <li>ROMA 48H (€ 12,50) valido 48 ore dalla prima timbratura e per un numero illimitato di viaggi nel territorio di roma capitale</li>
                    <li>ROMA 72H (€ 18,00) valido 72 ore dalla prima timbratura e per un numero illimitato di viaggi nel territorio di roma capitale</li>
                    <li>CIS (€ 24,00) valido per 7 giorni dalla data della prima timbratura, ovvero fino alle ore 24.00 del settimo giorno compreso quello della timbratura, e per un numero illimitato di viaggi nel territorio di roma capitale.</li>
                </ul>
            </Stack>
        </Stack>
    )
}
