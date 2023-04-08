import React from 'react'
import { Stack } from '../../generalGlobalComponent'

export default function PresentationImage() {
    return (
        <div>
            <h3 style={{ textAlign: "center", margin: " 2rem auto 0 auto" }}>BENVENUTI</h3 >
            <h1 style={{ textAlign: "center", marginTop: "0" }}>ROME ROOM HOTEL</h1>
            <Stack style={{ justifyContent: "center", gap: "10rem", paddingTop: "1rem" }}>
                <div>
                    <img src={require("../../Img/Hotel.jpg")} alt='None' style={{ borderRadius: "10px", height: "700px" }} />
                </div>

                <Stack style={{ flexDirection: "column", width: "600px", alignItems: "center" }}>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur vero maiores veniam eos recusandae consectetur praesentium quidem sint hic, harum quisquam ducimus animi ratione odio mollitia. Veniam, obcaecati voluptatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate odit harum quae cupiditate blanditiis? Natus repudiandae deleniti perferendis commodi dolorum voluptatum ipsam ut, harum aliquam quas et, accusamus facilis aperiam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ut impedit, quibusdam sed saepe neque commodi reprehenderit libero, deleniti nulla natus sequi expedita corrupti quia magni dolores odio aspernatur esse?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reiciendis officiis debitis minus ratione incidunt voluptatem et ipsum aut magnam consequuntur voluptatibus eaque nam, dolorum, nesciunt, sit animi ad sint.
                    </h3>
                </Stack>
            </Stack>
        </div>
    )
}
