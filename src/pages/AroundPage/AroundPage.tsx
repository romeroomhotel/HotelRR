import React from 'react'
import "./AroundPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import { AroundDataInterface, AroundImagesContainer } from '../../components/AroundImagesContainer/AroundImagesContainer';

const AroundDatas: AroundDataInterface[] = [
    {
        title: 'COLOSSEO',
        img: require('../../Img/colosseo.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.'
    },
    {
        title: 'FONTANA DI TREVI',
        img: require('../../Img/fontanaTrevi.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimusLorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus..'
    },
    {
        title: 'VILLA TORLONIA',
        img: require('../../Img/villaTorlonia.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.'
    },
    {
        title: 'LA SAPIENZA',
        img: require('../../Img/laSapienza.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.'
    },
    {
        title: 'PIAZZA DI SPAGNA',
        img: require('../../Img/piazzaSpagna.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.'
    },
    {
        title: 'PORTA MAGGIORE',
        img: require('../../Img/portaMaggiore.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.'
    },
]

const AroundPage = () => {
    return (
        <div>
            <ImageContainer bgImg={require('../../Img/Optimized-piazzaSalerno.jpg')} bigTitle={'consigli su cosa visitare'} subTitle={'le migliori attrazioni turistiche'}></ImageContainer>
            <AroundImagesContainer datas={AroundDatas} />
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default AroundPage;