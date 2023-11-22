import React from 'react'
import image_1 from '../../assets/ab67706f000000024f9e6dd438531652db9fe2c4.jpeg';
import image_2 from '../../assets/ab67706f00000002776d882a0eb24571af5dc394.jpeg';
import image_3 from '../../assets/ab67706f000000027876fe166a29b8e6b8db14da.jpeg';
import image_4 from '../../assets/ab67706f0000000278b4745cb9ce8ffe32daaf7e.jpeg';
import image_5 from '../../assets/ab67706f000000027bcd851d16216fae85f63a28.jpeg';
import image_6 from '../../assets/ab67706f00000002b538e7d67a2c102d12c9dbda.jpeg';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const RightSection = () => {

    const breakpoints = {
        944: {
            slidesPerView: 3,
        },
        1144: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1644: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1844: {
            slidesPerView: 7,
            spaceBetween: 20,
        }
    }

    return (
        <section className='right-section flex-grow bg-[#121212] overflow-hidden'>
            <header className='p-4 font-semibold'>
                <div className='flex flex-row gap-2 justify-between'>
                    <div className='flex flex-row gap-2'>
                        <button className='bg-black rounded-full h-8 w-8 cursor-not-allowed'><i className="fa-solid fa-angle-left text-gray-400" /></button>
                        <button className='bg-black rounded-full h-8 w-8 cursor-not-allowed'><i className="fa-solid fa-angle-right text-gray-400" /></button>
                    </div>
                    <div className='flex gap-2'>
                        <ul className='flex gap-2 '>
                            <li className='py-2 hover:scale-105 hover:text-white text-gray-400'><a href="/">Premium</a></li>
                            <li className='py-2 hover:scale-105 hover:text-white text-gray-400'><a href="/">Support</a></li>
                            <li className='py-2 hover:scale-105 hover:text-white text-gray-400'><a href="/">Download</a></li>
                        </ul>
                        <div className='border-solid border-[1px] border-white-500 m-3'></div>
                        <ul className='flex gap-2'>
                            <li className='py-2 pr-8 pl-2 hover:scale-105 hover:text-white text-gray-400'><a href="/">Sign up</a></li>
                            <li className='py-2 px-8 bg-white rounded-full text-black hover:scale-105'><a href="/">Log in</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <div className='px-4 bg-gradient-to-b from-[#242424]'>
                <div className='flex justify-between font-semibold'>
                    <h2 className='text-2xl '><a href='/'>Spotify Playlists</a></h2>
                    <button className='text-sm'>Show all</button>
                </div>

              
                <div className='pt-6'>
                    <Swiper slidesPerView={2} spaceBetween={10} breakpoints={breakpoints}>
                        <SwiperSlide>
                            <div className='p-4 w-fit isolate rounded-md bg-[#181818] min-w-[170px] min-h-[255px] max-w-[211px] max-h-[295hx] hover:bg-[#282828]'>
                                <div className=''>
                                    <div className='shadow-lg shadow-black/50 relative'>
                                        <img src={image_1} alt="" className='rounded-md mb-4' />
                                        <button className='play-btn rounded-full bg-green-500 w-[50px] h-[50px] absolute  right-2 '><i className="fa-solid fa-play text-black" /></button>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Today's Top Hits</p>
                                        <p className='text-sm'>Jungkook is on top of the hottest 50!</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-4 w-fit isolate rounded-md bg-[#181818] min-w-[170px] min-h-[255px] max-w-[211px] max-h-[295hx] hover:bg-[#282828]'>
                                <div className=''>
                                    <div className='shadow-lg shadow-black/50 relative'>
                                        <img src={image_2} alt="" className='rounded-md mb-4' />
                                        <button className='play-btn rounded-full bg-green-500 w-[50px] h-[50px] absolute  right-2 '><i className="fa-solid fa-play text-black" /></button>
                                    </div>
                                    <div>
                                        <p className='font-bold'>RapCaviar</p>
                                        <p className='text-sm'>new music from Jack Harlow</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-4 w-fit isolate rounded-md bg-[#181818] min-w-[170px] min-h-[255px] max-w-[211px] max-h-[295hx] hover:bg-[#282828]'>
                                <div className=''>
                                    <div className='shadow-lg shadow-black/50 relative'>
                                        <img src={image_3} alt="" className='rounded-md mb-4' />
                                        <button className='play-btn rounded-full bg-green-500 w-[50px] h-[50px] absolute  right-2 '><i className="fa-solid fa-play text-black" /></button>
                                    </div>
                                    <div>
                                        <p className='font-bold'>All out of 2010s</p>
                                        <p className='text-sm'>The biggest songs of 2010s.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-4 w-fit isolate rounded-md bg-[#181818] min-w-[170px] min-h-[255px] max-w-[211px] max-h-[295hx] hover:bg-[#282828]'>
                                <div className=''>
                                    <div className='shadow-lg shadow-black/50 relative'>
                                        <img src={image_4} alt="" className='rounded-md mb-4' />
                                        <button className='play-btn rounded-full bg-green-500 w-[50px] h-[50px] absolute  right-2 '><i className="fa-solid fa-play text-black" /></button>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Rock classics</p>
                                        <p className='text-sm'>Rock legends & epic songs that continue</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-4 w-fit isolate rounded-md bg-[#181818] min-w-[170px] min-h-[255px] max-w-[211px] max-h-[295hx] hover:bg-[#282828]'>
                                <div className=''>
                                    <div className='shadow-lg shadow-black/50 relative'>
                                        <img src={image_5} alt="" className='rounded-md mb-4' />
                                        <button className='play-btn rounded-full bg-green-500 w-[50px] h-[50px] absolute  right-2 '><i className="fa-solid fa-play text-black" /></button>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Chill Hits</p>
                                        <p className='text-sm'>Kick back to the best new and recent songs</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-4 w-fit isolate rounded-md bg-[#181818] min-w-[170px] min-h-[255px] max-w-[211px] max-h-[295hx] hover:bg-[#282828]'>
                                <div className=''>
                                    <div className='shadow-lg shadow-black/50 relative'>
                                        <img src={image_6} alt="" className='rounded-md mb-4' />
                                        <button className='play-btn rounded-full bg-green-500 w-[50px] h-[50px] absolute  right-2 '><i className="fa-solid fa-play text-black" /></button>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Viva Latino</p>
                                        <p className='text-sm'>Today's top latin hits</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-4 w-fit isolate rounded-md bg-[#181818] min-w-[170px] min-h-[255px] max-w-[211px] max-h-[295hx] hover:bg-[#282828]'>
                                <div className=''>
                                    <div className='shadow-lg shadow-black/50 relative'>
                                        <img src={image_1} alt="" className='rounded-md mb-4' />
                                        <button className='play-btn rounded-full bg-green-500 w-[50px] h-[50px] absolute  right-2 '><i className="fa-solid fa-play text-black" /></button>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Today's Top Hits</p>
                                        <p className='text-sm'>Jungkook is on top of the hottest 50!</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-4 w-fit isolate rounded-md bg-[#181818] min-w-[170px] min-h-[255px] max-w-[211px] max-h-[295hx] hover:bg-[#282828]'>
                                <div className=''>
                                    <div className='shadow-lg shadow-black/50 relative'>
                                        <img src={image_1} alt="" className='rounded-md mb-4' />
                                        <button className='play-btn rounded-full bg-green-500 w-[50px] h-[50px] absolute  right-2 '><i className="fa-solid fa-play text-black" /></button>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Today's Top Hits</p>
                                        <p className='text-sm'>Jungkook is on top of the hottest 50!</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
            </div>
        </div>
        </section >
    )
}

export default RightSection