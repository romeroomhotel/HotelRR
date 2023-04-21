import { Stack } from "../../generalGlobalComponent"
import { NavList, HLink, NavBar } from './HotelNav.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHotel } from '@fortawesome/free-solid-svg-icons';

const HotelNav = () => {

    return (
        <div>
            <NavBar>
                <Stack className='logo'>
                    <FontAwesomeIcon icon={faHotel} size="2xl" style={{ color: "#fbe0b1" }} />
                    <HLink to={""} style={{ color: "#fbe0b1", boxShadow: 'unset' }}>Roma room hotel</HLink>
                </Stack>

                <NavList>
                    <HLink to={"/"} >homepage</HLink>
                    <HLink to={"/HotelInfo"}>hotel info</HLink>
                    <HLink to={"/Rooms"}>rooms</HLink>
                    <HLink to={"/Info-utils"}>other info</HLink>
                    <HLink to={"/Near-places"}>around</HLink>
                    <HLink to={"https://wubook.net/wbkd/wbk/?lcode=1472478379&expired=1"} target="_blank">book now</HLink>
                </NavList>
                <FontAwesomeIcon className="burgerMenu" size="xl" icon={faBars} style={{ color: "#fbe0b1", }} />
            </NavBar>
        </div >
    )
}

export default HotelNav;