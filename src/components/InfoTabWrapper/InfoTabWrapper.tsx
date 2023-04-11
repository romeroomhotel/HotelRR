import React from 'react'
import { NavTab, LiTabs } from '../../generalGlobalComponent'

export default function InfoTabWrapper() {
    return (
        <div>
            <NavTab>
                <LiTabs to={"#"}>COMMUTES</LiTabs>
                <LiTabs to={"#"}>TAXI</LiTabs>
            </NavTab>
        </div >
    )
}
