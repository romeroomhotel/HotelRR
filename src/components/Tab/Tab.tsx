import React, { useState } from 'react'
import TabContent from './TabContent'
import TabNavItem from './TabNavItem'
import { NavTab, Stack } from '../../generalGlobalComponent';

export interface objectTabInterface {
    tabTitle: string;
    tabId: string;
    renderTabComponent: JSX.Element;
}

interface arrayTabsInterface {
    arrayTabs: objectTabInterface[]
}

export default function Tab(arrayTabs: arrayTabsInterface) {

    const [activeTab, setActiveTab] = useState("tab1")

    return (
        <>
            <Stack>
                {arrayTabs.arrayTabs.map((item: objectTabInterface) => (
                    <NavTab style={{ width: '100%' }}>
                        <TabNavItem title={item.tabTitle} id={item.tabId} activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>
                    </NavTab>
                ))}
            </Stack>
            {arrayTabs.arrayTabs.map((item) => (
                <TabContent id={item.tabId} activeTab={activeTab} children={item.renderTabComponent}></TabContent>
            ))}
        </ >
    )
}
