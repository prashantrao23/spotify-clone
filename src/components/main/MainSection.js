import React, { useState, useContext,useEffect, useCallback } from 'react'
// import MainRightSection from './MainRightSection'
import CardData from './cards/CardData'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Search from './Search';
import HomePage from './HomePage';
import SpotifyApiContext from '../../api/SpotifyApiContext';



const MainSection = (props) => {

    // const [isScrolled, setIsScrolled] = useState(false);
    const context = useContext(SpotifyApiContext);
    const { getSearchItem } = context
    const [profiledropdown, setProfileDropdown] = useState(false);
    const [searchBox, setSearchBox] = useState(false);

    let navigate = useNavigate();
    const location = useLocation();

    // if (location.pathname === '/search') {
    //     console.log("Search page")
    //     setSearchBox(true);
    // }

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

    useEffect(() => {
        setSearchBox(location.pathname === '/search');
      }, [location.pathname]);
      


    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    // const handleSearch = (query) => {
    //     if (query.trim() !== '') {
    //         getSearchItem(query);
    //     }
    // }

    const handleSearch = useCallback((query) => {
        if (query.trim() !== '') {
          getSearchItem(query);
        }
      }, [getSearchItem]);
      

    return (
        <section className='right-section flex flex-col flex-grow bg-[#121212] overflow-hidden relative min-w-[496px] rounded-md'>
            <header className={`p-4 font-semibold sticky w-full top-0 z-10 bg-black`}>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row gap-3 items-center w-full'>
                        <div className='flex flex-row gap-2'>
                            <button className='bg-black rounded-full h-8 w-8' onClick={handleBackward}><i className="fa-solid fa-angle-left text-gray-400" /></button>
                            <button className='bg-black rounded-full h-8 w-8' onClick={handleForward}><i className="fa-solid fa-angle-right text-gray-400" /></button>
                        </div>
                        {searchBox && (
                            <div className='w-full'>
                                <form onSubmit={(e) => { e.preventDefault(); }}>
                                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" onChange={e => handleSearch(e.target.value)} id="default-search" className="block w-full max-w-[300px] min-w-[200px] px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you want to listen to?" required />
                                    </div>
                                </form>
                            </div>
                        )}

                    </div>
                    <div className='flex gap-2'>
                        <ul className='flex gap-2'>
                            <li className='hover:scale-105 hover:text-white text-gray-400'><button className='rounded-full bg-[#171335] w-[32px] h-[32px] inline-flex justify-center items-center'><i className="fa-regular fa-bell" /></button></li>
                            <li className='hover:scale-105 hover:text-white text-gray-400'><button className='rounded-full bg-[#171335] w-[32px] h-[32px] inline-flex justify-center items-center' onClick={toggle}><i className="fa-regular fa-user" /></button></li>
                        </ul>
                        <ul className={` ${profiledropdown ? 'block' : 'hidden'} absolute grid grid-cols-1 divide-y bg-[#282828] text-sm w-[196px] h-[120px] right-2 top-[70px] p-1`}>
                            {/* <li className='text-[#d2d2d2] py-3 pr-2 pl-3'>Account</li> */}
                            <li className='text-[#d2d2d2] py-3 pr-2 pl-3'>Profile</li>
                            <li className='border-solid text-[#d2d2d2] py-3 pr-2 pl-3 hover:bg-[#3f3f3f] '><button onClick={logout}>Log out</button></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className='max-h-full flex-grow flex flex-col overflow-y-hidden'>
                <div className='overflow-y-hidden hover:overflow-y-scroll max-h-full'>
                    <Routes>
                        <Route path="/carddata/:id" element={<CardData />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </div>
        </section>
    )
}

export default MainSection