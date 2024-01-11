import React from 'react'
import image_2 from '../../assets/ab67706f00000002776d882a0eb24571af5dc394.jpeg';
import { Link } from 'react-router-dom';


const MainSidenav = () => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    return (
        <nav className='left-section flex flex-col gap-y-2 max-w-[420px] min-w-[320px] w-[100%] overflow-y-hidden overflow-hidden'>{/*overflow-y-hidden max-h-screen*/}
            <div className='bg-[#121212] rounded-md text-[17px]'>
                <ul className='py-2 px-3 flex flex-col gap-2'>
                    <li className='py-1 px-3'><Link to='/' className='flex gap-5 '><span><i className="fa-solid fa-house text-[24px]" /></span><span>Home</span></Link></li>
                    <li className='py-1 px-3'><Link to='/search' className='flex gap-5 '><span><i className="fa-solid fa-magnifying-glass text-[24px]" /></span><span>Search</span></Link></li>
                </ul>
            </div>

            <div className='library bg-[#121212] rounded-md overflow-y-hidden max-h-full flex-grow flex flex-col'>
                <div className='py-2 px-4 flex flex-row gap-2 items-center'>
                    <button className='py-1 px-2 me-auto'><span><i className="fa-solid fa-book text-[24px]" /></span><span className='ml-2'>Your Library</span></button>
                    <span className='block'>
                        <button className='p-2'><i className="fa-solid fa-plus" /></button>
                        <button className='p-2'><i className="fa-solid fa-arrow-right" /></button>
                    </span>
                </div>
                <div className='lists py-2 px-2 overflow-y-hidden hover:overflow-y-scroll max-h-full relative'>
                    <div className='px-4 flex flex-row justify-between items-center text-sm mb-2'>
                        <span>
                            <i className="fa-solid fa-magnifying-glass" />
                        </span>
                        <span>Recents <i className="fa-solid fa-list" /></span>
                    </div>
                    <ul className='flex flex-col gap-2  playlists'>
                        {arr.map((arr, index) => (
                            <li className='flex gap-2 p-1' key={index}>
                                <div>
                                    <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                                </div>
                                <div className='w-full'>
                                    <span className='font-semibold text-base'>Liked Songs</span>
                                    <p className='text-sm'><span>Playlist</span> <span>{arr}</span></p>
                                </div>
                            </li>
                        ))}
                        {/* <li className='flex gap-2 p-1 invisible '>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span></span></p>
                            </div>
                        </li> */}
                    </ul>
                </div>


            </div>

        </nav>
    )
}

export default MainSidenav