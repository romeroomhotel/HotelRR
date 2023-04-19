import React from 'react'
import "./AroundPage.css"
import FooterHotel from '../../components/Footer/FooterHotel';
import PrenotationBanner from '../../components/PrenotationBanner/PrenotationBanner';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import { AroundDataInterface, AroundImagesContainer } from '../../components/AroundImagesContainer/AroundImagesContainer';

const AroundDatas: AroundDataInterface[] = [
    {
        title: 'Primo posto',
        img: require('../../Img/area-comunale-1.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.'
    },
    {
        title: 'Secondo posto',
        img: require('../../Img/area-comunale-1.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimusLorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus..'
    },
    {
        title: 'Terzo posto',
        img: require('../../Img/area-comunale-1.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus explicabo consequuntur, accusantium nisi dicta numquam odit? Dolor, saepe ex alias modi deleniti architecto maiores facilis quibusdam eveniet aut obcaecati ducimus.'
    },
]

const AroundPage = () => {
    return (
        <div>
            <ImageContainer bgImg={require('../../Img/piazzaSalerno.jpg')} bigTitle={'consigli su cosa visitare'} subTitle={'le migliori attrazioni turistiche'}></ImageContainer>
            <AroundImagesContainer datas={AroundDatas} />
            <PrenotationBanner />
            <FooterHotel />
        </div>
    )
}

export default AroundPage;