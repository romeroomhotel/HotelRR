import React from 'react'
import "./AroundPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import { AroundDataInterface, AroundImagesContainer } from '../../components/AroundImagesContainer/AroundImagesContainer';
import HotelNav from '../../components/Navbar/HotelNav';

const AroundDatas: AroundDataInterface[] = [
    {
        title: 'COLOSSEO',
        img: require('../../Img/colosseo.jpg'),
        description: "Durante l'Impero Romano e con il lemma di Panem et circenses, il Colosseo (allora conosciuto come Anfiteatro Flavio) consentiva a più di 50.000 persone di assistere ai loro spettacoli preferiti. Le esibizioni di animali esotici, le esecuzioni di prigionieri, le riproduzioni di scene di battaglie e le lotte dei gladiatori furono per anni gli spettacoli d'intrattenimento dei romani. Il Colosseo fu operativo per più di 500 anni e i sui ultimi spettacoli si tennero nel VI secolo. A partire dal VI secolo, il Colosseo fu vittima di saccheggi, terremoti e persino bombardamenti nella Seconda Guerra Mondiale.Dotato di un grande istinto di sopravvivenza, il Colosseo fu utilizzato per decenni come magazzino, chiesa, cimitero e fortezza."
    },
    {
        title: 'FONTANA DI TREVI',
        img: require('../../Img/fontanaTrevi.jpg'),
        description: 'La leggenda nacque nel 1954 con il film “Tre soldi nella fontana di Trevi” e afferma quanto segue: Lanciando una moneta nella fontana: tornerai a Roma. Lanciando due monete nella fontana: troverai l’amore con un italiano. Lanciando tre monete nella fontana: ti sposerai con la persona che hai conosciuto. Affinché funzioni, è raccomandabile lanciare la moneta con la mano destra al di sopra della spalla sinistra. Una curiosità: ogni anno si estraggono dalla fontana circa un milione di euro in monete.Dal 2007 questo denaro è dato in beneficenza.'
    },
    {
        title: 'VILLA TORLONIA',
        img: require('../../Img/villaTorlonia.jpg'),
        description: 'Villa Torlonia è un complesso di edifici e ville di Roma, sito nel quartiere Nomentano. Già proprietà della famiglia Torlonia, fu residenza di Mussolini, e dal 1978 è un parco pubblico. I suoi edifici storici costituiscono i musei di Villa Torlonia.'
    },
    {
        title: 'LA SAPIENZA',
        img: require('../../Img/laSapienza.jpg'),
        description: 'L’entrata principale è in piazzale Aldo Moro (un tempo piazzale delle Scienze): un ingresso monumentale, marcato dagli alti e solenni propilei di Arnaldo Foschini, permette l’accesso a un largo viale alberato delimitato dagli edifici delle facoltà. Sullo sfondo emerge la statua in bronzo della Minerva, uno dei simboli dell’università, posta su un piedistallo in una vasca d’acqua. Alle sue spalle, la massiccia mole del Palazzo del Rettorato, opera di Piacentini. La grande piazza che chiude il viale ripropone, nelle dimensioni, le proporzioni del Circo Agonale di piazza Navona e, nella forma, lo spazio classico del Foro.  '
    },
    {
        title: 'PIAZZA DI SPAGNA',
        img: require('../../Img/piazzaSpagna.jpg'),
        description: "Piazza di Spagna deve il suo nome al Palazzo di Spagna, sede dell'ambasciata iberica presso il Vaticano.La piazza venne creata proprio con l'idea di mettere in comunicazione l'ambasciata e la Chiesa di Trinità dei Monti."
    },
    {
        title: 'PORTA MAGGIORE',
        img: require('../../Img/portaMaggiore.jpg'),
        description: "Porta Maggiore è una delle porte nelle Mura aureliane di Roma. Si trova nel punto in cui convergevano otto degli undici acquedotti che portavano l'acqua alla città, nella zona che, per la vicinanza al vecchio tempio dedicato nel 477 a.C. alla dea Speranza (da non confondere con l'omonimo tempio più recente, inaugurato verso il 260 a.C. nell'area del Foro Olitorio), veniva chiamata ad Spem Veterem. Tutta l'area nelle vicinanze è ricca di reperti antichi: piccoli monumenti funebri, colombari, ipogei e, soprattutto, una basilica sotterranea."
    },
]

const AroundPage = () => {
    return (
        <div>
            <HotelNav />
            <ImageContainer bgImg={require('../../Img/Optimized-piazzaSalerno.jpg')} bigTitle={'consigli su cosa visitare'} subTitle={'le migliori attrazioni turistiche'}></ImageContainer>
            <AroundImagesContainer datas={AroundDatas} />
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default AroundPage;