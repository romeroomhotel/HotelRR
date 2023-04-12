import React, { useState } from 'react'
import { LiTabs, NavTab, Stack } from '../../generalGlobalComponent'


export default function InfoTabWrapper() {

    const [activeTabInfo, setActiveTabInfo] = useState("tab1")

    interface TabContentInfoProps {
        id: string;
        activeTabInfo: string;
        children: JSX.Element;
        title?: string;
    }

    interface TabItemInfoProps {
        id: string;
        activeTabInfo: string;
        title?: string;
        setActiveTabInfo: (value: string) => void
    }

    const TabNavItem = (props: TabItemInfoProps) => {

        const handleClick = () => {
            setActiveTabInfo(props.id)
        };

        return (
            <LiTabs onClick={handleClick} className={activeTabInfo === props.id ? "Active" : ""}>{props.title}</LiTabs>
        )
    }

    const TabContent = (props: TabContentInfoProps) => {

        return (
            activeTabInfo === props.id ? <div className='TabContent'>
                {props.children}
            </div>
                : null
        )
    }

    return (
        <div>
            <NavTab>
                <Stack>
                    <TabNavItem title="TRASPORTI PUBBLICI" id="tab1" activeTabInfo={activeTabInfo} setActiveTabInfo={setActiveTabInfo} />
                    <TabNavItem title="TAXI" id="tab2" activeTabInfo={activeTabInfo} setActiveTabInfo={setActiveTabInfo} />
                </Stack>
                <Stack>
                    <TabContent id="tab1" activeTabInfo={activeTabInfo}>
                        <p>Tab 1 works!</p>
                    </TabContent>
                    <TabContent id="tab2" activeTabInfo={activeTabInfo}>
                        <p>Tab 2 works!</p>
                    </TabContent>
                </Stack>
            </NavTab>
        </div >
    )
}
