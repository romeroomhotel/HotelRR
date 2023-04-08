import React from 'react'
import { Stack } from "../../generalGlobalComponent"
import { NavList, HLink } from './HotelNav.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';

const HotelNav = () => {
    return (
        <>
            <Stack style={{ justifyContent: "center", alignItems: "center", background: "#937251", padding: "1.3em 0" }}>
                <Stack style={{ justifyContent: "center", alignItems: "center", gap: "1rem", paddingRight: "1rem" }}>
                    <FontAwesomeIcon icon={faHotel} size="2xl" style={{ color: "#fbe0b1" }} />
                    <HLink to={""} className='hotelName' style={{ color: "#fbe0b1" }}>Rome room hotel</HLink>
                </Stack>

                <NavList>
                    <HLink to={""}>homepage</HLink>
                    <HLink to={""}>hotel info</HLink>
                    <HLink to={""}>rooms</HLink>
                    <HLink to={""}>other info</HLink>
                    <HLink to={""}>around</HLink>
                    <HLink to={""}>book now!</HLink>
                </NavList>
            </Stack>
        </>
    )
}

export default HotelNav;