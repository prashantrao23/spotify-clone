import React, { useState } from 'react'
import MainSidenav from './MainSidenav'
import FooterPlayer from './FooterPlayer'
import MainSection from './MainSection'


const MainDashboard = () => {

    const [showCardData, setShowCardData] = useState(false);


    return (
        <>
            <div className="App  text-white p-2 flex flex-col items-stretch  max-h-screen">
                <div className='flex gap-2 mb-2 flex-grow dashboard overflow-hidden'>
                    <MainSidenav />
                    <MainSection showCardData={showCardData} setShowCardData={setShowCardData} />
                </div>
                <FooterPlayer />
            </div>
        </>
    )
}

export default MainDashboard