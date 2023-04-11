import React from 'react'
import { Stack } from '../../generalGlobalComponent';

const ServicesBanner = () => {
    return (
        <Stack style={{ justifyContent: "center", gap: "5rem", alignItems: "center", padding: "5em 0 15rem", fontFamily: "Montserrat , sans-serif" }}>
            <Stack style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ backgroundColor: "red", width: "350px", height: "240px", position: "relative" }}>
                    <Stack style={{ flexDirection: "column", position: "absolute", top: "100%" }}>
                        <h3 style={{ textAlign: "center" }}>lorem Impsum</h3>
                        <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas a dicta ratione autem, fugit praesentium doloremque neque tempora suscipit voluptatibus consectetur reiciendis ullam? Corporis aut cum expedita vel autem?</p>
                    </Stack>
                </div>
            </Stack>
            <Stack style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ backgroundColor: "red", width: "350px", height: "240px", position: "relative" }}>
                    <Stack style={{ flexDirection: "column", position: "absolute", top: "100%" }}>
                        <h3 style={{ textAlign: "center" }}>lorem Impsum</h3>
                        <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas a dicta ratione autem, fugit praesentium doloremque neque tempora suscipit voluptatibus consectetur reiciendis ullam? Corporis aut cum expedita vel autem?</p>
                    </Stack>
                </div>
            </Stack>
            <Stack style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ backgroundColor: "red", width: "350px", height: "240px", position: "relative" }}>
                    <Stack style={{ flexDirection: "column", position: "absolute", top: "100%" }}>
                        <h3 style={{ textAlign: "center" }}>lorem Impsum</h3>
                        <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas a dicta ratione autem, fugit praesentium doloremque neque tempora suscipit voluptatibus consectetur reiciendis ullam? Corporis aut cum expedita vel autem?</p>
                    </Stack>
                </div>
            </Stack>
        </Stack>
    )
}

export default ServicesBanner;