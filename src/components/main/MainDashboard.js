import React from 'react'
import MainSidenav from './MainSidenav'
import MainRightSection from './MainRightSection'
import FooterPlayer from './FooterPlayer'

const MainDashboard = () => {
    return (
        <div className="App  text-white p-2 flex flex-col items-stretch min-w-[800px] max-h-screen">
            <div className='flex gap-2 mb-2 flex-grow dashboard overflow-hidden'>
                <MainSidenav />
                <MainRightSection />
            </div>
            <FooterPlayer />
        </div>
    )
}

export default MainDashboard