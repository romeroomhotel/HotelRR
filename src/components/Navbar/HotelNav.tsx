import { Stack } from "../../generalGlobalComponent"
import { NavList, HLink, NavBar, NavList2 } from './HotelNav.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHotel, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const HotelNav = () => {

    const [openBurgerMenu, setOpenBurgerMenu] = useState(false)
    const [burgerClass, setBurgerClass] = useState("closedBurger")
    const [menuClass, setMenuClass] = useState("closeMenu")
    const [burgerClass2, setBurgerClass2] = useState("openedBurger")

    const toggleMenu = () => {
        if (openBurgerMenu === false) {
            setOpenBurgerMenu(!setOpenBurgerMenu)
            setBurgerClass("openedBurger")
            setMenuClass("openMenu")
            setBurgerClass2("closedBurger")
        }
    }

    const toggleMenu2 = () => {

        setOpenBurgerMenu(!setOpenBurgerMenu)
        setBurgerClass("closedBurger")
        setMenuClass("closeMenu")
        setBurgerClass2("openedBurger")

    }

    return (
        <div style={{ width: "100%" }}>
            <NavBar>
                <Stack className='logo'>
                    <FontAwesomeIcon icon={faHotel} size="2xl" style={{ color: "#fbe0b1" }} />
                    <HLink to={""} style={{ color: "#fbe0b1", boxShadow: 'unset' }}>Roma room hotel</HLink>
                </Stack>

                <NavList>
                    <HLink to={"/"} >homepage</HLink>
                    <HLink to={"/HotelInfo"}>info hotel</HLink>
                    <HLink to={"/Rooms"}>camere</HLink>
                    <HLink to={"/Info-utils"}>altre info</HLink>
                    <HLink to={"/Near-places"}>Dintorni</HLink>
                    <HLink to={"https://wubook.net/wbkd/wbk/?lcode=1471869133"} target="_blank">book now</HLink>
                </NavList>

                <NavList2 className={menuClass}>
                    <HLink to={"/"} >homepage</HLink>
                    <HLink to={"/HotelInfo"}>info hotel</HLink>
                    <HLink to={"/Rooms"}>camere</HLink>
                    <HLink to={"/Info-utils"}>altre info</HLink>
                    <HLink to={"/Near-places"}>dintorni</HLink>
                    <HLink to={"https://wubook.net/wbkd/wbk/?lcode=1471869133"} target="_blank">book now</HLink>
                </NavList2>
                <FontAwesomeIcon className={burgerClass2} onClick={toggleMenu} icon={faBars} style={{ color: "#fbe0b1" }} />
                <FontAwesomeIcon className={burgerClass} onClick={toggleMenu2} icon={faXmark} style={{ color: "#fbe0b1" }} />
            </NavBar>
        </div >
    )
}

export default HotelNav;