import React from 'react'
import "./Hotelinfo.css"
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import FooterHotel from '../../components/Footer/FooterHotel';
import Tab from '../../components/Tab/Tab';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import StructureCarousel from '../../components/StructureCarousel/StructureCarousel';
import { Stack } from '../../generalGlobalComponent';

const HotelInfo = () => {

  const hotelInfoTab = [
    {
      tabTitle: "COME RAGGIUNGERCI",
      tabId: "tab1",
      renderTabComponent: (
        <Stack style={{ flexDirection: 'column', padding: '3rem', fontFamily: "Montserrat , sans-serif" }}>
          <h2>COME RAGGIUNCERCI :</h2>
          <iframe title='Dove siamo' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.1748890173512!2d12.509977476599346!3d41.91059897123823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6173e26c0bb9%3A0x3346966931154f4!2sRoma%20Room%20Hotel!5e0!3m2!1sit!2sit!4v1681951605865!5m2!1sit!2sit" width="600" height="450" loading="lazy" ></iframe>
          <Stack style={{ flexDirection: 'column', padding: '2rem 0' }}>
            <h3>
              In automobile :
            </h3>
            <p>
              Giunti a Roma dalle autostrade, immettetevi sul Grande Raccordo Anulare (GRA) e dirigetevi verso Roma Centro, seguendo le indicazioni per Tangenziale Est (Uscita 14). Proseguire in direzione Via Tiburtina/SS5. Prendete l’uscita via Tiburtina. Seguite via Tiburtina e imboccate Via della Lega Lombarda. Immettetevi nella rotatoria di piazzale delle Province e prendete la 2ª uscita. Proseguite per via Catania e piazza Lecco. Siete giunti a via Bari e troverete il nostro albergo sulla vostra destra prima di piazza Salerno.
              In treno:
              Dalla stazione Tiburtina o dalla stazione di Roma Termini  raggiungerete il nostro albergo con il servizio taxi, oppure:
              Metro B (linea Blu)
              Stazione Tiburtina: 2 fermate di metropolitana B (linea blu) direzione Laurentina. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
              Stazione Termini: 2 fermate di metropolitana B (linea blu) direzione Rebibbia o Conca D’Oro. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
            </p>
            <h3>
              In aereo :
            </h3>
            <p>
              Come arrivare da Fiumicino Aeroporto (FCO):
              L’aeroporto dista 40 km. In taxi si impiegano circa 50 minuti. Il tempo può variare in base alle condizioni del traffico.
            </p>
            <h3>
              In taxi :
            </h3>
            <p>
              Il servizio Taxi è disponibile agli  Arrivi dei Terminal 1 e 3. Le vetture adibite al servizio taxi del Comune di Roma e del Comune di Fiumicino sono di colore bianco e sono distinguibili dalla scritta “TAXI” sul tetto ed in base al numero identificativo di licenza esposto sugli sportelli, sul retro e all’interno della vettura. Il nostro albergo si trova al di fuori delle Mura Aureliane e dunque non rientra nelle tariffe fisse valide per le corse con destinazione entro le mura.
              Servizio navetta privata:
              Su richiesta possiamo prenotare per i nostri clienti un servizio navetta privato da/per l’aeroporto tramite macchina o minibus. Vi preghiamo di rivolgerVi al nostro staff
            </p>
            <h3>
              In treno :
            </h3>
            <p>
              La stazione ferroviaria dell’aeroporto di Fiumicino è situata all’interno dell’area aeroportuale, in prossimità dei Terminal di arrivo e partenza dall’aeroporto.
              Il Leonardo express, servizio no-stop dedicato esclusivamente ai passeggeri aeroportuali, per/da Roma Termini con partenze ogni 15 minuti e tempo di percorrenza di circa 32 minuti. Il costo del biglietto è di E 15.00.
              Dalla stazione di Roma Termini: 2 fermate di metropolitana B (linea blu) direzione Rebibbia o Conca D’Oro. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
              I Treni regionali linea FL1 da/per altre stazioni di Roma, tra cui Roma Tiburtina, con partenze ogni 15 minuti nei giorni feriali e ogni 30 nei giorni festivi.
              Il Treno regionale FL1  è la soluzione più comoda sia per economia di costo, si di tempo.
              Dalla stazione Tiburtina raggiungerete il nostro albergo con il servizio taxi, oppure:
              Metropolitana B (linea blu) direzione Laurentina. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
            </p>
            <h3>
              In autobus:
            </h3>
            <p>
              Diverse linee di autobus assicurano il collegamento tra l’aeroporto “Leonardo da Vinci” e la stazione Termini.
            </p>
            <h3>
              Cotral :
            </h3>
            <p>
              SIT BUS SHUTTLE
              A.M.  Srl
              TERRAVISION
              ATRAL – SCHIAFFINI
              Il servizio è attivo tutti i giorni, dal lunedì alla domenica.
              I biglietti possono essere acquistati on-line o direttamente a bordo del bus.
              Frequenza delle corse: circa 30 minuti.
              Dalla stazione di Roma Termini: 2 fermate di metropolitana B (linea blu) direzione Rebibbia o Conca D’Oro. Scendere alla fermata di “policlinico”. L’albergo è a circa 200 metri a piedi.
              Collegamenti da Ciampino Areoporto:
              L’areoporto di Ciampino dista 30 min (24,4 km) dal nostro albergo
              In taxi
              Le vetture taxi sono solamente di colore bianco ed hanno sul tetto la scritta TAXI. Sugli sportelli anteriori è applicato il simbolo del Comune di riferimento e il numero della licenza. Il nostro albergo si trova al di fuori delle Mura Aureliane e dunque non rientra nelle tariffe fisse valide per le corse con destinazione entro le mura.
              In autobus
              Autobus da e per RomaTermini
              L’aeroporto di Roma-Ciampino è raggiungibile con diverse linee di autobus.
              Il servizio è attivo tutti i giorni, dal lunedì alla domenica.
              I biglietti sono acquistabili on line, presso i punti vendita autorizzati all’interno del  Terminal Arrivi o a bordo dei bus.
              Tutti gli stalli sono ubicati di fronte le Partenze Internazionali.
              Per informazioni sugli orari, i percorsi e il costo del biglietto consultare i siti internet delle diverse società.
              Dalla stazione Termini:
              2 fermate di metropolitana B (linea blu) direzione Rebibbia o Conca D’Oro. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
              Dalla stazione Termini:
              2 fermate di metropolitana B (linea blu) direzione Rebibbia o Conca D’Oro. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
              ATAC Linea 720 – Collegamento da Stazione Laurentina Metro B da/per a Ciampino Aeroporto
              I biglietti sono acquistabili presso i punti vendita autorizzati all’interno del  Terminal Arrivi o alle apposite macchinette. Il titolo di viaggio BIT ha un costo di E 1.50 ed è valido per 100 minuti dalla prima timbratura.
              Capolinea della metropolitana B (linea blu) direzione Rebibbia o Conca D’Oro. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
            </p>
          </Stack>
        </Stack>
      )
    },
    {
      tabTitle: "SERVIZI",
      tabId: "tab2",
      renderTabComponent: (<Stack style={{ flexDirection: 'column', alignItems: 'center', fontFamily: "Montserrat , sans-serif", padding: '3rem 1rem' }}>
        <h2 style={{ margin: '2rem 0' }}>I NOSTRI SERVIZI</h2>
        <Stack style={{
          width: '100%', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-around'
        }}>
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
        </Stack>
      </Stack >)
    },
    {
      tabTitle: "CONTATTI",
      tabId: "tab3",
      renderTabComponent: (<p>BONA3</p>)
    }
  ]

  return (
    <>
      <ImageContainer bgImg={require('../../Img/Optimized-facciataentrata.jpg')} bigTitle={'roma room hotel'} subTitle={"la nostra struttura"}></ImageContainer>
      <StructureCarousel />
      <Tab arrayTabs={hotelInfoTab} />
      <PrenotationBanner />
      <FooterHotel />
    </>
  )
}

export default HotelInfo;