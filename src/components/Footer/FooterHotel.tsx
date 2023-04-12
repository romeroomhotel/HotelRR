import React from 'react'
import { Stack } from '../../generalGlobalComponent'
import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import { SliderData } from '../Carousel/CarouselData'

export default function FooterHotel() {
    return (
        <div style={{
            backgroundColor: "#fbe0b1", fontFamily: "Montserrat , sans-serif"
        }}>
            < Stack style={{
                justifyContent: "space-around", alignItems: "center"
            }}>
                <Stack style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width:"30rem" }}>
                    <h6>IL NOSTRO HOTEL</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, eveniet qui aliquam dicta provident amet nostrum repudiandae corrupti voluptatibus sint esse autem perferendis consequuntur, blanditiis quos dolorem iste facere. Delectus.</p>
                </Stack>
                <Carousel slides={SliderData} />
            </Stack >
            <Stack style={{ justifyContent: "space-around", alignItems: "center", backgroundColor: "#937251", padding: "0.5rem 0" }}>
                <p>© COPYRIGHT ROMA ROOM HOTEL</p>
                <Link to={"#"}>informativa privacy e cookie policy</Link>
            </Stack>
        </div >
    )
}
