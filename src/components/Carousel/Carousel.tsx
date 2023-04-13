import React, { useState } from 'react'
import { SliderData } from './CarouselData';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Slider } from './Carousel.style';
import { Slide } from './Carousel.type'
import './Carousel.css'

interface SlideProps {
    slides: Slide[]
}

const Carousel: React.FC<SlideProps> = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div>
            <Slider >
                {
                    SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index} style={{ position: "relative" }}>
                                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                                {index === current && (
                                    <img src={slide.image} alt="NONE" className="image" />
                                )}
                            </div>
                        )
                    })
                }
            </Slider>
        </div >
    )
}

export default Carousel;