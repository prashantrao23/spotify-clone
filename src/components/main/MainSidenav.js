import React from 'react'
import image_2 from '../../assets/ab67706f00000002776d882a0eb24571af5dc394.jpeg';


const MainSidenav = () => {
    return (
        <nav className='left-section flex flex-col gap-y-2 max-w-[420px] min-w-[300px] w-[100%] overflow-y-auto'>{/*overflow-y-hidden max-h-screen*/}
            <div className='bg-[#121212] rounded-md text-[17px]'>
                <ul className='py-2 px-3 flex flex-col gap-2'>
                    <li className='py-1 px-3'><a href='/' className='flex gap-5 '><span><i className="fa-solid fa-house text-[24px]" /></span><span>Home</span></a></li>
                    <li className='py-1 px-3'><a href='/' className='flex gap-5 '><span><i className="fa-solid fa-magnifying-glass text-[24px]" /></span><span>Search</span></a></li>
                </ul>
            </div>

            <div className='library bg-[#121212] rounded-md overflow-y-hidden max-h-full'>
                <div className='py-2 px-4 flex flex-row gap-2 items-center'>
                    <button className='py-1 px-2 me-auto'><span><i className="fa-solid fa-book text-[24px]" /></span><span className='ml-2'>Your Library</span></button>
                    <span className='block'>
                        <button className='p-2'><i className="fa-solid fa-plus" /></button>
                        <button className='p-2'><i className="fa-solid fa-arrow-right" /></button>
                    </span>
                </div>
                <div className='py-2 px-2 overflow-y-hidden hover:overflow-y-auto max-h-full '>
                    <div className='px-4 flex flex-row justify-between items-center text-sm mb-2'>
                        <span>
                            <i className="fa-solid fa-magnifying-glass" />
                        </span>
                        <span>Recents <i class="fa-solid fa-list" /></span>
                    </div>
                    <ul className='flex flex-col gap-2  playlists'>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>

                    </ul>
                </div>


            </div>

        </nav>
    )
}

export default MainSidenav