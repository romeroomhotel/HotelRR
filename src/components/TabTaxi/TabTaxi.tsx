import React from 'react'
import { Stack } from '../../generalGlobalComponent'

export default function TabTaxi() {
    return (
        <Stack style={{ flexDirection: 'column', padding: '2rem', fontFamily: 'MontSerrat' }}>
            <h2>TAXI</h2>
            <Stack className='publicContainer'>
                <h3>CONTATTI TAXI</h3>
                <p>06 3570, 06 4994, 06 6645, 06 5551, o 06 8822.</p>

            </Stack>
            <Stack className='publicContainer'>
                <h3>POSTEGGI TAXI</h3>
                <h4>Zona Centro</h4>
                <p>Barberini tel. 4814447</p>
                <p>v. Boncompagni tel. 484448</p>
                <p>vc. del Gallinaccio tel. 6793733</p>
                <p>p. Poli tel. 6783300</p>
                <p>p. SS. Apostoli tel. 6782622</p>
                <p>p. S. Carlo al Corso tel. 6878226</p>
                <p>v. S. Maria in Via tel. 6790955</p>
                <p>p. di Spagna tel. 6796686</p>
                <p>v. Vittorio Veneto tel. 4880777</p>
                <p>p. S. Silvestro tel. 6793183;</p>
                <h4>Zona Bologna-Tiburtina – S. Lorenzo</h4>
                <p>Nardini tel. 8610800;</p>
                <p>vl. Provincie tel. 44243433;</p>
                <p>C. Castro Laurenziano tel. 4959240;</p>
                <p>p. Confienza tel. 491363;</p>
                <p>p. Lecce tel. 44232143;</p>
                <p>vl. del Policlinico tel. 4452850;</p>
                <p>pl. Provincie tel. 44243143;</p>
                <p>p. Sassari tel. 44230621;</p>
                <p>pl. A. Moro tel. 4452917;</p>
                <p>pl. Stazione Tiburtina tel. 490290;</p>
                <p>v. Tiburtina tel. 4957800;</p>
                <p>v. Tiburtina 545 tel. 432010;</p>
            </Stack>
            <Stack className='publicContainer'>
                <h3>DA/PER AEROPORTO DI FIUMICINO L. DA VINCI</h3>
                <ul>
                    <li>Ciampino Aeroporto: € 50,00</li>
                    <li>Nuova Fiera di Roma: € 25,00</li>
                    <li>Civitavecchia Porto: € 120,00</li>
                    <li>Stazione Ostiense: € 45,00</li>
                    <li>Stazione Tiburtina: € 55,00</li>
                    <li>Castello della Magliana – Parco dei Medici: € 30,00</li>
                </ul>
            </Stack>
            <Stack className='publicContainer'>
                <h3>DA/PER AEROPORTO DI CIAMPINO G.B. PASTINE</h3>
                <ul>
                    <li>Stazione Tiburtina: € 35,00</li>
                    <li>Stazione Ostiense: € 30,00</li>
                    <li>Fiumicino Aeroporto: € 50,00</li>
                </ul>
            </Stack>
        </Stack>
    )
}
