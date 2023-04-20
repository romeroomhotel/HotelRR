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
        <Stack style={{ flexDirection: 'column' }}>
          <h2>COME RAGGIUNCERCI :</h2>
          <iframe title='Dove siamo' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.1748890173512!2d12.509977476599346!3d41.91059897123823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6173e26c0bb9%3A0x3346966931154f4!2sRoma%20Room%20Hotel!5e0!3m2!1sit!2sit!4v1681951605865!5m2!1sit!2sit" width="600" height="450" loading="lazy" ></iframe>
          <p>
            In automobile:
            Giunti a Roma dalle autostrade, immettetevi sul Grande Raccordo Anulare (GRA) e dirigetevi verso Roma Centro, seguendo le indicazioni per Tangenziale Est (Uscita 14). Proseguire in direzione Via Tiburtina/SS5. Prendete l’uscita via Tiburtina. Seguite via Tiburtina e imboccate Via della Lega Lombarda. Immettetevi nella rotatoria di piazzale delle Province e prendete la 2ª uscita. Proseguite per via Catania e piazza Lecco. Siete giunti a via Bari e troverete il nostro albergo sulla vostra destra prima di piazza Salerno.
            In treno:
            Dalla stazione Tiburtina o dalla stazione di Roma Termini  raggiungerete il nostro albergo con il servizio taxi, oppure:
            Metro B (linea Blu)
            Stazione Tiburtina: 2 fermate di metropolitana B (linea blu) direzione Laurentina. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
            Stazione Termini: 2 fermate di metropolitana B (linea blu) direzione Rebibbia o Conca D’Oro. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
            In aereo:
            Come arrivare da Fiumicino Aeroporto (FCO):
            L’aeroporto dista 40 km. In taxi si impiegano circa 50 minuti. Il tempo può variare in base alle condizioni del traffico.
            In taxi
            Il servizio Taxi è disponibile agli  Arrivi dei Terminal 1 e 3. Le vetture adibite al servizio taxi del Comune di Roma e del Comune di Fiumicino sono di colore bianco e sono distinguibili dalla scritta “TAXI” sul tetto ed in base al numero identificativo di licenza esposto sugli sportelli, sul retro e all’interno della vettura. Il nostro albergo si trova al di fuori delle Mura Aureliane e dunque non rientra nelle tariffe fisse valide per le corse con destinazione entro le mura.
            Servizio navetta privata:
            Su richiesta possiamo prenotare per i nostri clienti un servizio navetta privato da/per l’aeroporto tramite macchina o minibus. Vi preghiamo di rivolgerVi al nostro staff
            In Treno:
            La stazione ferroviaria dell’aeroporto di Fiumicino è situata all’interno dell’area aeroportuale, in prossimità dei Terminal di arrivo e partenza dall’aeroporto.
            Il Leonardo express, servizio no-stop dedicato esclusivamente ai passeggeri aeroportuali, per/da Roma Termini con partenze ogni 15 minuti e tempo di percorrenza di circa 32 minuti. Il costo del biglietto è di E 15.00.
            Dalla stazione di Roma Termini: 2 fermate di metropolitana B (linea blu) direzione Rebibbia o Conca D’Oro. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
            I Treni regionali linea FL1 da/per altre stazioni di Roma, tra cui Roma Tiburtina, con partenze ogni 15 minuti nei giorni feriali e ogni 30 nei giorni festivi.
            Il Treno regionale FL1  è la soluzione più comoda sia per economia di costo, si di tempo.
            Dalla stazione Tiburtina raggiungerete il nostro albergo con il servizio taxi, oppure:
            Metropolitana B (linea blu) direzione Laurentina. Scendere alla fermata di “Policlinico”. L’albergo è a circa 200 metri a piedi.
            In autobus
            Diverse linee di autobus assicurano il collegamento tra l’aeroporto “Leonardo da Vinci” e la stazione Termini.
            COTRAL
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
      )
    },
    {
      tabTitle: "SERVIZI",
      tabId: "tab2",
      renderTabComponent: (<Stack style={{ flexDirection: 'column', alignItems: 'center' }}>
        <h2>I NOSTRI SERVIZI</h2>
        <Stack style={{ justifyContent: 'space-around', width: '100%', flexWrap: 'wrap' }}>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Bagno</h4>
            <p>Carta igienica</p>
            <p>Asciugamani</p>
            <p>Vasca o doccia</p>
            <p>Bagno privato</p>
            <p>WC</p>
            <p>Prodotti da bagno in omaggio</p>
            <p>Asciugacapelli</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Camera da letto</h4>
            <p>Biancheria per la casa</p>
            <p>Armadio o guardaroba</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Spazi all'aperto</h4>
            <p>Terrazza</p>
            <p>Giardino</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Cucina</h4>
            <p>Prodotti per le pulizie</p>
            <p>Bollitore elettrico</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Servizi in camera</h4>
            <p>Presa elettrica vicino al letto</p>
            <p>Stand appendiabiti</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Area soggiorno</h4>
            <p>Scrivania</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Media e tecnologia</h4>
            <p>Telefono</p>
            <p>TV</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>internet</h4>
            <p>Internet WiFi disponibile <br></br> gratuitamente in tutta la struttura.</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Parcheggio</h4>
            <p>Parcheggio privato disponibile in loco su prenotazione <br></br> al costo di € 15 al giorno.</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Servizi di accoglienza</h4>
            <p>Fattura disponibile su richiesta</p>
            <p>Servizio concierge</p>
            <p>Deposito bagagli</p>
            <p>Banco escursioni</p>
            <p>Check-in e check-out express</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Servizi di pulizia</h4>
            <p>Servizio pulizie giornaliero</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Servizi business</h4>
            <p>Fax/fotocopiatrice</p>
            <p>Spazi per riunioni/banchetti</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Protezione e sicurezza</h4>
            <p>Estintori</p>
            <p>Telecamere a circuito chiuso nelle zone in comune</p>
            <p>Allarme antifumo</p>
            <p>Allarme di sicurezza</p>
            <p>Accesso con chiavi</p>
            <p>Cassaforte</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Servizi generali</h4>
            <p>Sala comune/zona TV</p>
            <p>Distributore automatico di snack</p>
            <p>Distributore automatico di bevande</p>
            <p>Area fumatori</p>
            <p>Aria condizionata</p>
            <p>Struttura interamente non fumatori</p>
            <p>Pavimento in marmo o in piastrelle</p>
            <p>Riscaldamento</p>
            <p>Cappella o luogo di culto</p>
            <p>Ascensore</p>
            <p>Ventilatore</p>
            <p>Disponibilità di camere familiari</p>
            <p>Navetta aeroportuale a pagamento</p>
            <p>Camere non fumatori</p>
          </Stack>
          <Stack style={{ flexDirection: 'column' }}>
            <span></span>
            <h4>Lingue parlate</h4>
            <p>Inglese</p>
            <p>Spagnolo</p>
            <p>Italiano</p>
            <p>Cinese</p>
          </Stack>
        </Stack>
      </Stack>)
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