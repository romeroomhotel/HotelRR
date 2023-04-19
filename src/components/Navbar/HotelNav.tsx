import { Stack } from "../../generalGlobalComponent"
import { NavList, HLink } from './HotelNav.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';

const HotelNav = () => {

    return (
        <>
            <Stack style={{ justifyContent: "center", alignItems: "center", background: "#937251", padding: "0.5rem 0", position: 'fixed', width: '100%', zIndex: '10' }}>
                <Stack style={{ justifyContent: "center", alignItems: "center", gap: "1rem", paddingRight: "1rem" }}>
                    <FontAwesomeIcon icon={faHotel} size="2xl" style={{ color: "#fbe0b1" }} />
                    <HLink to={""} style={{ color: "#fbe0b1", boxShadow: 'unset' }}>Roma room hotel</HLink>
                </Stack>

                <NavList>
                    <HLink to={"/"} >homepage</HLink>
                    <HLink to={"/HotelInfo"}>hotel info</HLink>
                    <HLink to={"/Rooms"}>rooms</HLink>
                    <HLink to={"/Info-utils"}>other info</HLink>
                    <HLink to={"/Near-places"}>around</HLink>
                    <HLink to="" target="_blank">book now!</HLink>
                </NavList>
            </Stack >
        </>
    )
}

export default HotelNav;