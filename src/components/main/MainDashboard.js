import React, { useEffect, useState } from 'react'
import MainSidenav from './MainSidenav'
import FooterPlayer from './FooterPlayer'
import MainSection from './MainSection'
import { useNavigate } from 'react-router-dom'


const MainDashboard = () => {



    const [sessionWarning, setSessionWarning] = useState(false); // Display warning state
    const [sessionEnd, setSessionEnd] = useState(false);

    let navigate = useNavigate();


    useEffect(() => {
        const checkToken = sessionStorage.getItem('token');
        const tokenExpiration = sessionStorage.getItem('expirationTime');

        if (!checkToken || Date.now() > parseInt(tokenExpiration, 10)) {
            navigate('/login');
        } else {
            const warningTime = parseInt(tokenExpiration, 10) - 5 * 60 * 1000; // 5 minutes before expiration
            console.log('warningTime', warningTime)
            setTimeout(() => {
                const remainingTime = warningTime - Date.now();
                console.log('remainingTime', remainingTime)
                setSessionWarning(true);
            }, warningTime - Date.now());

            setTimeout(() => {
                // localStorage.removeItem("token");
                sessionStorage.removeItem("token");
                setSessionWarning(false);
                setSessionEnd(true)
            }, tokenExpiration - new Date().getTime());
        }
        // eslint-disable-next-line
    }, []);


    const logout = () => {
        // localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem('expirationTime');
        navigate("/login");
    }


    return (
        <div className='relative'>
            {sessionWarning && (
                <div className="bg-yellow-100 border-l-yellow-300 border-l-6 absolute w-full z-20 top-0 px-3 py-2" role="alert">
                    <div className='flex flex-row justify-between text-amber-900 pl-3'>
                        <div className='flex flex-row'>
                            <span><i className="fa-solid fa-triangle-exclamation" /></span>
                            <p>Your session will expire in 5 minutes.</p>
                        </div>
                        <button className="text-xl" onClick={() => { setSessionWarning(false) }}><i className="fa-regular fa-circle-xmark"/></button>
                    </div>
                </div>
            )}
            {sessionEnd && (
                <div className="absolute bg-gradient-to-b from-[#131316]/20 to-[#131316] backdrop-blur-lg h-full w-full z-30 top-0 left-0 flex justify-center items-center" role="alert">
                    <div className='px-4 py-6 bg-slate-800 rounded-md flex flex-col justify-center items-center'>
                        <p className='text-white mb-3'>Your session is expired. Please login again!!!</p>
                        <button className='bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-md' onClick={logout}>Log out</button>
                    </div>
                </div>
            )}
            <div className="App  text-white p-2 flex flex-col items-stretch  max-h-screen">
                <div className='flex gap-2 mb-2 flex-grow dashboard overflow-y-hidden'>
                    <MainSidenav />
                    <MainSection />
                </div>
                <FooterPlayer />
            </div>
        </div>
    )
}

export default MainDashboard