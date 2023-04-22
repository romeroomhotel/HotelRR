import React from 'react'
import { Stack } from '../../generalGlobalComponent'
import { ServicesContainer } from './TabService.style'

export default function TabServices() {
    return (
        <Stack style={{ flexDirection: 'column', alignItems: 'center', fontFamily: "Montserrat , sans-serif", padding: '3rem 1rem' }}>
            <h2 style={{ padding: '2rem 0 5rem 0' }}>I NOSTRI SERVIZI</h2>
            <ServicesContainer>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Servizi generali</h4>
                        </Stack>
                        <li>Sala comune/zona TV</li>
                        <li>Distributore automatico di snack</li>
                        <li>Distributore automatico di bevande</li>
                        <li>Area fumatori</li>
                        <li>Aria condizionata</li>
                        <li>Struttura interamente non fumatori</li>
                        <li>Pavimento in marmo o in piastrelle</li>
                        <li>Riscaldamento</li>
                        <li>Cappella o luogo di culto</li>
                        <li>Ascensore</li>
                        <li>Ventilatore</li>
                        <li>Disponibilità di camere familiari</li>
                        <li>Navetta aeroportuale a pagamento</li>
                        <li>Camere non fumatori</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Bagno</h4>
                        </Stack>
                        <li>Carta igienica</li>
                        <li>Asciugamani</li>
                        <li>Vasca o doccia</li>
                        <li>Bagno privato</li>
                        <li>WC</li>
                        <li>Prodotti da bagno in omaggio</li>
                        <li>Asciugacapelli</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Servizi di accoglienza</h4>
                        </Stack>
                        <li>Fattura disponibile su richiesta</li>
                        <li>Servizio concierge</li>
                        <li>Deposito bagagli</li>
                        <li>Banco escursioni</li>
                        <li>Check-in e check-out express</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Protezione e sicurezza</h4>
                        </Stack>
                        <li>Estintori</li>
                        <li>Telecamere a circuito chiuso nelle zone in comune</li>
                        <li>Allarme antifumo</li>
                        <li>Allarme di sicurezza</li>
                        <li>Accesso con chiavi</li>
                        <li>Cassaforte</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Lingue parlate</h4>
                        </Stack>
                        <li>Inglese</li>
                        <li>Spagnolo</li>
                        <li>Italiano</li>
                        <li>Cinese</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Camera da letto</h4>
                        </Stack>
                        <li>Biancheria per la casa</li>
                        <li>Armadio o guardaroba</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Spazi all'aperto</h4>
                        </Stack>
                        <li>Terrazza</li>
                        <li>Giardino</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Cucina</h4>
                        </Stack>
                        <li>Prodotti per le pulizie</li>
                        <li>Bollitore elettrico</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Servizi in camera</h4>
                        </Stack>
                        <li>Presa elettrica vicino al letto</li>
                        <li>Stand appendiabiti</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Media e tecnologia</h4>
                        </Stack>
                        <li>Telefono</li>
                        <li>TV</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Servizi business</h4>
                        </Stack>
                        <li>Fax/fotocopiatrice</li>
                        <li>Spazi per riunioni/banchetti</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>internet</h4>
                        </Stack>
                        <li>Internet WiFi disponibile <br /><br /> gratuitamente in tutta la struttura.</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Parcheggio</h4>
                        </Stack>
                        <li>Parcheggio privato disponibile in loco <br /><br /> su prenotazione al costo di € 15 al giorno.</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Servizi di pulizia</h4>
                        </Stack>
                        <li>Servizio pulizie giornaliero</li>
                    </ul>
                </Stack>
                <Stack className='serviceDiv' style={{ flexDirection: 'column' }}>
                    <ul>
                        <Stack>
                            <span></span>
                            <h4>Area soggiorno</h4>
                        </Stack>
                        <li>Scrivania</li>
                    </ul>
                </Stack>
            </ServicesContainer>
        </Stack >
    )
}
