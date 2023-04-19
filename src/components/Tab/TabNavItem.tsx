import React from 'react'
import { LiTabs, Stack } from '../../generalGlobalComponent';

interface TabItemProps {
    id: string;
    activeTab: string;
    title?: string;
    setActiveTab: (value: string) => void
}

export default function TabNavItem({ id, activeTab, title, setActiveTab }: TabItemProps) {

    const handleClick = () => {
        setActiveTab(id)
    };

    return (
        <Stack>
            <LiTabs style={{ width: '100%' }} onClick={handleClick} className={activeTab === id ? "Active" : ""}>{title}</LiTabs>
        </Stack>

    )
}
