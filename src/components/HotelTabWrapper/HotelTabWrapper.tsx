import React from 'react'
import { NavTab, LiTabs } from '../../generalGlobalComponent'

export default function HotelTabWrapper() {
    return (
        <NavTab>
            <LiTabs to={"#"}>HOTEL</LiTabs>
            <LiTabs to={"#"}>SERVICES</LiTabs>
            <LiTabs to={"#"}>CONTACTS</LiTabs>
        </NavTab>
    )
}
