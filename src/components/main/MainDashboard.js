import React, { useEffect, useState } from 'react'
import MainSidenav from './MainSidenav'
import FooterPlayer from './FooterPlayer'
import MainSection from './MainSection'
import { useNavigate } from 'react-router-dom'


const MainDashboard = () => {

    // const [showCardData, setShowCardData] = useState(false);
    const checkToken = localStorage.getItem("token");

    let navigate = useNavigate();

    
    useEffect(()=>{
        if(!checkToken){
            navigate("/login")
        }
    },[])


    return (
        <>
            <div className="App  text-white p-2 flex flex-col items-stretch  max-h-screen">
                <div className='flex gap-2 mb-2 flex-grow dashboard overflow-y-hidden'>
                    <MainSidenav />
                    <MainSection />
                </div>
                <FooterPlayer />
            </div>
        </>
    )
}

export default MainDashboard