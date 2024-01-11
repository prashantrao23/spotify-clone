import React, { useState, useEffect } from 'react'
import MainRightSection from './MainRightSection'
import CardData from './cards/CardData'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Search from './Search';


const MainSection = (props) => {

    // const [isScrolled, setIsScrolled] = useState(false);

    const [profiledropdown, setProfileDropdown] = useState(false);

    let navigate = useNavigate();
    const location = useLocation();

    const currentPath = window.location.pathname;

    const toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setProfileDropdown(!profiledropdown);
    };

    const handleBackward = () => {
        navigate(-1);
    };

    const handleForward = () => {
        navigate(1);
    };

    // useEffect(() => {
    //     const body = document.querySelector('.right-section');
    //     const handleScroll = () => {
    //         if (body) {
    //             const scrollY = body.scrollTop;

    //             // Adjust the threshold as needed
    //             const scrollThreshold = 200;

    //             setIsScrolled(scrollY > scrollThreshold);
    //         }
    //     };
    //     if (body) {
    //         body.addEventListener('scroll', handleScroll);
    //         console.log("Sccrolled")
    //     }
    //     return () => {
    //         if (body) {
    //             body.removeEventListener('scroll', handleScroll);
    //             console.log("UnSccrolled")
    //         }
    //     };
    // }, []);


    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <section className='right-section flex flex-col flex-grow bg-[#121212] overflow-hidden relative min-w-[496px] rounded-md'>
            <header className={`p-4 font-semibold sticky w-full top-0 z-10 bg-black`}>
                <div className='flex flex-row gap-2 justify-between'>
                    <div className='flex flex-row gap-2'>

                        <button className='bg-black rounded-full h-8 w-8' onClick={handleBackward}><i className="fa-solid fa-angle-left text-gray-400" /></button>
                        <button className='bg-black rounded-full h-8 w-8' onClick={handleForward}><i className="fa-solid fa-angle-right text-gray-400" /></button>
                    </div>
                    <div className='flex gap-2'>
                        <ul className='flex gap-2'>
                            <li className='hover:scale-105 hover:text-white text-gray-400'><button className='rounded-full bg-[#171335] w-[32px] h-[32px] inline-flex justify-center items-center'><i className="fa-regular fa-bell" /></button></li>
                            <li className='hover:scale-105 hover:text-white text-gray-400'><button className='rounded-full bg-[#171335] w-[32px] h-[32px] inline-flex justify-center items-center' onClick={toggle}><i className="fa-regular fa-user" /></button></li>
                        </ul>
                        <ul className={` ${profiledropdown ? 'block' : 'hidden'} absolute grid grid-cols-1 divide-y bg-[#282828] text-sm w-[196px] h-[120px] right-2 top-[70px] p-1`}>
                            {/* <li className='text-[#d2d2d2] py-3 pr-2 pl-3'>Account</li> */}
                            <li className='text-[#d2d2d2] py-3 pr-2 pl-3'>Profile</li>
                            <li className='border-solid text-[#d2d2d2] py-3 pr-2 pl-3'><button onClick={logout}>Log out</button></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className='max-h-full flex-grow flex flex-col overflow-y-hidden'>
                <div className='overflow-y-hidden hover:overflow-y-scroll max-h-full'>
                    <Routes>
                        <Route path="/carddata/:id" element={<CardData />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/" element={<MainRightSection />} />
                    </Routes>
                </div>
            </div>
        </section>
    )
}

export default MainSection