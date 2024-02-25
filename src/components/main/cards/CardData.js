import React, { useEffect, useContext, useState } from 'react'
import SpotifyApiContext from '../../../api/SpotifyApiContext';
import MoonLoader from "react-spinners/ClipLoader";
import { Link, useParams } from 'react-router-dom';


const CardData = (props) => {

    const context = useContext(SpotifyApiContext);
    const { singleplaylistdata, getPlaylists, getuserdetail, getLikedPlaylist, likedPlaylist, checklikedsong, likedSong, getAllUserPlaylist, userPlaylist, ImageColor, dominantColor, Playtrack, addingTrackToLiked, removingTrackFromLiked } = context;

    const [isToggle, setIsToggle] = useState(false)
    // const [songLiked, setSongLiked] = useState(false);

    const { id } = useParams();

    if (!singleplaylistdata || !singleplaylistdata.name) {
        console.log("No card data")
    }


    useEffect(() => {
        const fetchData = async () => {
            await getPlaylists(id);
            await getuserdetail();
            await getLikedPlaylist();
            await getAllUserPlaylist();
            //   sendlikedplaylistid();
        };

        fetchData();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (likedPlaylist && likedPlaylist._id) {
            sendlikedplaylistid();
        }
        // eslint-disable-next-line
    }, [likedPlaylist]);


    useEffect(() => {
        if (singleplaylistdata && singleplaylistdata.images) {
            // console.log("Image :", singleplaylistdata.images[0].url)
            const fetchDominantColor = async () => {
                try {
                    await ImageColor(singleplaylistdata.images[0].url);
                    // console.log('Dominant Color:', dominantColor);
                    // Do something with the dominant color
                } catch (error) {
                    console.error('Error fetching dominant color:', error);
                }
            };
            fetchDominantColor();
        }
        // eslint-disable-next-line
    }, [singleplaylistdata]);



    const sendlikedplaylistid = async () => {
        await checklikedsong(likedPlaylist._id);
    };

    const toggle = (index) => {
        setIsToggle(isToggle === index ? null : index);
    };

    const handleSubmit = async (track_id, playlist_id) => {
        const remove = await addingTrackToLiked(track_id, playlist_id);
        if (remove) {
            sendlikedplaylistid();
            console.log("Added")
        } else {
            console.log("Not Added")
        }
    }

    const handleRemoveFromLiked = async (track_id, playlist_id) => {
        const remove = await removingTrackFromLiked(track_id, playlist_id);
        if (remove) {
            sendlikedplaylistid();
            console.log("Removed")
        } else {
            console.log("Not Removed")
        }
    }

    function sendTrack(data) {
        Playtrack(data)
    }

    const convertMsToMinutes = (durationInMs) => {
        // Convert milliseconds to seconds
        const durationInSeconds = Math.floor(durationInMs / 1000);
        // Calculate minutes and seconds
        const minutes = Math.floor(durationInSeconds / 60);
        const seconds = durationInSeconds % 60;
        // Format the result as "minutes:seconds"
        const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        return formattedDuration;
    }

    function formatDateToDaysAgo(dateString) {
        const date = new Date(dateString);
        const currentDate = new Date();

        const timeDifference = currentDate - date;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            return 'Today';
        } else if (daysDifference === 1) {
            return 'Yesterday';
        } else {
            return `${daysDifference} days ago`;
        }
    }


    return (

        <>
            {!singleplaylistdata || !singleplaylistdata.images ? (

                <div className='flex justify-center items-center h-full'>
                    <MoonLoader color="#36d7b7" />
                </div>
            ) : (
                <>

                    <div className={`h-auto absolute top-0 left-0 right-0 pt-10 pb-40 backdrop-blur-lg`} style={{ background: dominantColor ? `linear-gradient(to bottom, ${dominantColor}, black)` : 'black' }}>
                        <div className='pl-8 flex flex-row gap-5 justify-start items-center mt-10'>
                            <div className='h-[235px] w-[235px] max-[1280px]:h-[192px] max-[1280px]:w-[192px] min-h-[192px] min-w-[192px] drop-shadow-2xl'><img src={singleplaylistdata.images[0].url} alt="" /></div>
                            <div className='' >
                                <p>Playlist</p>
                                <p className='text-[5vw] font-bold overflow-hidden whitespace-nowrap text-ellipsis w-full'>{singleplaylistdata.name}</p>
                                <p className='overflow-hidden whitespace-nowrap text-ellipsis'>{singleplaylistdata.description}</p>
                                <p>Made for ID </p>
                            </div>
                        </div>
                    </div>
                    <div className='relative mt-72'>
                        <div className=''>
                            <div className='p-6 bg-gradient-to-b from-[#131316]/20 to-[#131316] backdrop-blur-lg' >
                                <div className='flex flex-row items-center w-full gap-6'>
                                    <div>
                                        <Link to="/search"><button className='text-5xl text-green-600'><i className="fa-solid fa-circle-play" /></button></Link>
                                    </div>
                                    <button className='text-3xl'><i className="fa-regular fa-heart" /></button>
                                    <button className='text-2xl '><i className="fa-solid fa-ellipsis" /></button>
                                    <div className='flex flex-1 justify-end'>
                                        <button className='flex items-center gap-1'><span>List</span><i className="fa-solid fa-list" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className='px-6 bg-[#131316] font-light overflow-hidden min-w-full'>
                                <table className="table-auto w-full overflow-x-auto">
                                    <thead className={`text-left border-b-[1px] text-sm text-gray-400 top-0 sticky `}>
                                        <tr>
                                            <th className='font-medium'>#</th>
                                            <th className='font-medium'>Title</th>
                                            <th className='font-medium max-[840px]:hidden'>Album</th>
                                            <th className='font-medium max-[1070px]:hidden'>Date added</th>
                                            <th className='font-medium text-center'><i className="fa-regular fa-clock" /></th>
                                            <th className='font-medium'></th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-left'>
                                        {!singleplaylistdata.tracks || !singleplaylistdata.tracks.items ? (

                                            <tr className=''>
                                                <div className='flex justify-center items-center h-full'>
                                                    <MoonLoader color="#36d7b7" />
                                                </div>
                                            </tr>
                                        ) :
                                            (singleplaylistdata.tracks.items.map((item, index) => (

                                                <tr className=" border-b  dark:border-gray-700 relative" key={index}>
                                                    <td className='py-1'>{index + 1}</td>
                                                    <th scope="row" className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <button onClick={() => { sendTrack({ name: item.track.name, artist: item.track.album.artists, track: item.track.preview_url, icon: item.track.album.images, track_id:item.track.id }) }}>
                                                            <div className='flex gap-2 p-1 w-fit '>
                                                                <div>
                                                                    {item.track.album.images.map((image, index) => (
                                                                        <img key={index} src={image.url} alt="" width="55px" className="rounded-md min-w-[55px]" />
                                                                    )).slice(-1)[0]}
                                                                </div>
                                                                <div className='items-start flex flex-col w-full min-w-[80px] max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis'>
                                                                    <span className='text-base'>{item.track.name}</span>
                                                                    <p className='text-sm'>{item.track.album.artists.map((artist) => (
                                                                        <span key={artist.id}>{artist.name} | </span>
                                                                    ))}</p>
                                                                </div>
                                                            </div></button>
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        <div className='whitespace-nowrap overflow-hidden text-ellipsis w-full min-w-[30] max-w-[100px]'>
                                                            <span className=''>{item.track.album.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">{formatDateToDaysAgo(item.added_at)}</td>
                                                    <td className="px-6 py-4">{convertMsToMinutes(item.track.duration_ms)}</td>
                                                    <td className="px-6 py-4">
                                                        {
                                                            likedSong.some(track => track.track_id === item.track.id) ? (
                                                                <button className='dislike active' onClick={() => handleRemoveFromLiked(item.track.id, likedPlaylist._id)}>
                                                                    <i className="fa-solid fa-heart text-red-800" />
                                                                </button>
                                                            ) : (
                                                                <button className='like' onClick={() => handleSubmit(item.track.id, likedPlaylist._id)}>
                                                                    <i className="fa-regular fa-heart" />
                                                                </button>
                                                            )
                                                        }
                                                    </td>
                                                    <td className=' px-6 py-4'>
                                                        <button onClick={() => toggle(index)}><i className="fa-solid fa-bars" /></button>
                                                        {isToggle === index && (
                                                            <div className='absolute right-2 bg-[#2f2f2f] px-2 py-2 z-10 rounded-md'>
                                                                <p>Add to Playlist</p>
                                                                <ul className='list-item'>
                                                                    {userPlaylist.map((playlist, index) => (
                                                                        <li className='border-b px-2 py-1' key={index}> <button onClick={() => (handleSubmit(item.track.id, playlist._id))}>{playlist.name}</button></li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>

            )
            }
        </>
    )
}

export default CardData