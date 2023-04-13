import React from 'react'
import { LiTabs } from '../../generalGlobalComponent';

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
        <LiTabs onClick={handleClick} className={activeTab === id ? "Active" : ""}>{title}</LiTabs>
    )
}
