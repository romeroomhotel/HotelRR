import React from 'react'


interface TabContentHotelProps {
    id: string;
    activeTab: string;
    children: JSX.Element;
    title?: string;
}

function TabContent({ id, activeTab, children }: TabContentHotelProps) {
    return (
        activeTab === id ? <div className='TabContentHotel'>
            {children}
        </div>
            : null
    )
}

export default TabContent
