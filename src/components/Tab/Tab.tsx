import React, { useState } from 'react'
import TabContent from './TabContent'
import TabNavItem from './TabNavItem'
import { NavTab } from '../../generalGlobalComponent';
import { TabContainer, TabTotal } from './Tab.style';

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
        <TabTotal>
            <TabContainer>
                {arrayTabs.arrayTabs.map((item: objectTabInterface) => (
                    <NavTab style={{ width: '100%' }}>
                        <TabNavItem title={item.tabTitle} id={item.tabId} activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>
                    </NavTab>
                ))}
            </TabContainer>
            {arrayTabs.arrayTabs.map((item) => (
                <TabContent id={item.tabId} activeTab={activeTab} children={item.renderTabComponent}></TabContent>
            ))}
        </TabTotal>
    )
}
