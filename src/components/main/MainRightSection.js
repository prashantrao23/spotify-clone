import React, { useContext, useEffect, useState } from 'react'
import image_1 from '../../assets/ab67706f000000024f9e6dd438531652db9fe2c4.jpeg';
import image_2 from '../../assets/ab67706f00000002776d882a0eb24571af5dc394.jpeg';
import image_3 from '../../assets/ab67706f000000027876fe166a29b8e6b8db14da.jpeg';
import image_4 from '../../assets/ab67706f0000000278b4745cb9ce8ffe32daaf7e.jpeg';
import image_5 from '../../assets/ab67706f000000027bcd851d16216fae85f63a28.jpeg';
import image_6 from '../../assets/ab67706f00000002b538e7d67a2c102d12c9dbda.jpeg';
import SpotifyApiContext from '../../api/SpotifyApiContext';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import CategoryCard from './cards/CategoryCard';
import PlaylistCard from './cards/PlaylistCard';

import { useNavigate } from 'react-router-dom';
import Album from './cards/Album';

import MoonLoader from "react-spinners/ClipLoader";





const MainRightSection = (props) => {

    const { showcarddata } = props;
    const context = useContext(SpotifyApiContext);
    const { categorydata, getCategories, allplaylistdata, getAllPlaylists, getPlaylists, getNewAlbums, getAlbum, accessToken } = context;

    let navigate = useNavigate();

    // let token = localStorage.getItem("token");
    // const [tokenLoaded, setTokenLoaded] = useState(false);

    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const accessToken = localStorage.getItem('token');
    //     if (accessToken) {
    //         setTokenLoaded(true);
    //     } else {
    //         console.log("Token not loded");
    //     }
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            await getCategories();
            await getAllPlaylists();
            await getNewAlbums();
            setLoading(false);
        };

        fetchData();
        // eslint-disable-next-line
    }, [accessToken]);


    // console.log("categorydata from Main Rightsection", categorydata);
    // console.log("playlistdata from Main Rightsection", allplaylistdata);
    // console.log("albumdata from Main Rightsection", getAlbum);

    const getplaylistID = (id) => {
        console.log(id);
        getPlaylists(id);
        navigate(`/carddata/${id}`);
    }

    if (loading) {
        return <div className='flex justify-center items-center h-full w-full'>
            <MoonLoader color="#36d7b7" />
        </div>;
        // console.log("Loading...")
    }

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
        <div className='relative z-0'>
            <div className='absolute bg-gradient-to-b from-[#4f4646] h-[332px] mt-[-75px] w-full -z-[1] '></div>

            <div className='px-4 flex flex-row flex-wrap gap-6'>
                <section className="mb-4 w-full">
                    <div><p className=' text-white text-3xl mb-4 font-bold'>Good Evening</p></div>
                    <ul className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        <li className='flex gap-2 p-1 bg-[#4b4646] rounded-md'>
                            <div>
                                <img src={image_1} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1 bg-[#4b4646] rounded-md'>
                            <div>
                                <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1 bg-[#4b4646] rounded-md'>
                            <div>
                                <img src={image_3} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1 bg-[#4b4646] rounded-md'>
                            <div>
                                <img src={image_4} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1 bg-[#4b4646] rounded-md'>
                            <div>
                                <img src={image_5} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>
                        <li className='flex gap-2 p-1 bg-[#4b4646] rounded-md'>
                            <div>
                                <img src={image_6} alt="" width="55px" className='rounded-md min-w-[55px]' />
                            </div>
                            <div className='w-full'>
                                <span className='font-semibold text-base'>Liked Songs</span>
                                <p className='text-sm'><span>Playlist</span> <span>54 songs</span></p>
                            </div>
                        </li>

                    </ul>
                </section>

                <section className='mb-4 w-full'>
                    <div className='flex justify-between font-semibold'>
                        <h2 className='text-xl font-bold '><a href='/'>Categories</a></h2>
                        <button className='text-sm'>Show all</button>
                    </div>
                    <div className='pt-6'>
                        <Swiper slidesPerView={2} spaceBetween={10} breakpoints={breakpoints} navigation={true} modules={[Navigation]}>
                            {!categorydata || !categorydata.categories ? (

                                <div className='text-center text-2xl'>
                                    No Data to display yet ...

                                </div>
                            ) :
                                (

                                    categorydata.categories.items.map((items, index) => {
                                        return <SwiperSlide key={index}>
                                            <CategoryCard icon={items.icons} item={items} />
                                        </SwiperSlide>
                                    })
                                )
                            }
                        </Swiper>
                    </div>
                </section>

                <section className='mb-4 w-full'>
                    <div className='flex justify-between font-semibold'>
                        <h2 className='text-xl font-bold '><a href='/'>Playlists</a></h2>
                        <button className='text-sm'>Show all</button>
                    </div>
                    <div className='pt-6'>
                        <Swiper slidesPerView={2} spaceBetween={10} breakpoints={breakpoints} navigation={true} modules={[Navigation]}>
                            {!allplaylistdata || !allplaylistdata.playlists ? (

                                <div className='text-center text-2xl'>
                                    No Data to display yet ...
                                </div>
                            ) :
                                (

                                    allplaylistdata.playlists.items.map((items, index) => {
                                        return <SwiperSlide key={index}>
                                            <PlaylistCard image={items.images} item={items} getplaylistID={getplaylistID} showcarddata={showcarddata} />
                                        </SwiperSlide>
                                    })
                                )
                            }

                        </Swiper>
                    </div>
                </section>

                <section className='mb-4 w-full'>
                    <div className='flex justify-between font-semibold'>
                        <h2 className='text-xl font-bold '><a href='/'>Albums</a></h2>
                        <button className='text-sm'>Show all</button>
                    </div>
                    <div className='pt-6'>
                        <Swiper slidesPerView={2} spaceBetween={10} breakpoints={breakpoints} navigation={true} modules={[Navigation]}>
                            {!getAlbum || !getAlbum.albums ? (

                                <div className='text-center text-2xl'>
                                    No Data to display yet ...
                                </div>
                            ) :
                                (

                                    getAlbum.albums.items.map((items, index) => {
                                        return <SwiperSlide key={index}>
                                            <Album image={items.images} item={items} />
                                        </SwiperSlide>
                                    })
                                )
                            }

                        </Swiper>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default MainRightSection