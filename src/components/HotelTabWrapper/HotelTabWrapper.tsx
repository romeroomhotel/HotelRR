import React, { useState } from 'react'
import { LiTabs, NavTab, Stack } from '../../generalGlobalComponent'

export default function HotelTabWrapper() {

    const [activeTabHotel, setActiveTabHotel] = useState("tab1")

    interface TabContentHotelProps {
        id: string;
        activeTabHotel: string;
        children: JSX.Element;
        title?: string;
    }

    interface TabItemHotelProps {
        id: string;
        activeTabHotel: string;
        title?: string;
        setActiveTabHotel: (value: string) => void
    }

    const TabNavItem = (props: TabItemHotelProps) => {

        const handleClick = () => {
            setActiveTabHotel(props.id)
        };

        return (
            <LiTabs onClick={handleClick} className={activeTabHotel === props.id ? "Active" : ""}>{props.title}</LiTabs>
        )
    }

    const TabContent = (props: TabContentHotelProps) => {

        return (
            activeTabHotel === props.id ? <div className='TabContentHotel'>
                {props.children}
            </div>
                : null
        )
    }

    return (
        <div>
            <NavTab>
                <Stack>
                    <TabNavItem title="COME RAGGIUNGERCI" id="tab1" activeTabHotel={activeTabHotel} setActiveTabHotel={setActiveTabHotel} />
                    <TabNavItem title="SERVIZI" id="tab2" activeTabHotel={activeTabHotel} setActiveTabHotel={setActiveTabHotel} />
                    <TabNavItem title="CONTATTI" id="tab3" activeTabHotel={activeTabHotel} setActiveTabHotel={setActiveTabHotel} />
                </Stack>
                <Stack>
                    <TabContent id="tab1" activeTabHotel={activeTabHotel}>
                        <p>Tab 1 works!</p>
                    </TabContent>
                    <TabContent id="tab2" activeTabHotel={activeTabHotel}>
                        <p>Tab 2 works!</p>
                    </TabContent>
                    <TabContent id="tab3" activeTabHotel={activeTabHotel}>
                        <p>Tab 3 works!</p>
                    </TabContent>
                </Stack>
            </NavTab>
        </div >
    )
}
