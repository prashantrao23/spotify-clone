import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SpotifyApiContext from '../../api/SpotifyApiContext';
import MoonLoader from "react-spinners/ClipLoader";



const PlaylistDetails = () => {

    const { id } = useParams();
    const context = useContext(SpotifyApiContext);
    const { getUserPlaylistByID, userPlaylistByID, checklikedsong, likedSong, getTracks, playlistTracks } = context;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await getUserPlaylistByID(id);
            await checklikedsong(id);
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line
    }, [id])


    useEffect(() => {
        const fetchData = async () => {

            if (likedSong && likedSong.length > 0) {
                console.log("Liked Song before useEffect", likedSong);
                const trackIds = await likedSong.map(track => track.track_id);
                console.log(trackIds);
                await getTracks(trackIds)
            }
        }
        fetchData()

        // eslint-disable-next-line
    }, [likedSong]);

    // console.log("Liked Song after useEffect", likedSong);


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
            {loading ? ( // Display loader while data is being fetched
                <div className='flex justify-center items-center h-full'>
                    <MoonLoader color="#36d7b7" />
                </div>
            ) : (
                <>

                    <div className='h-auto bg-gradient-to-b from-[#302972] absolute top-0 left-0 right-0 pt-10 pb-40'>
                        <div className='pl-8 flex flex-row gap-5 justify-start items-center mt-10'>
                            <div className='h-[235px] w-[235px] max-[1280px]:h-[192px] max-[1280px]:w-[192px] min-h-[192px] min-w-[192px] drop-shadow-2xl'></div>
                            <div>
                                <p>Playlist</p>
                                <p className='text-[5vw] font-bold overflow-hidden whitespace-nowrap text-ellipsis w-full'>{userPlaylistByID.name}</p>
                                <p className='overflow-hidden whitespace-nowrap text-ellipsis'>Description</p>
                                <p>Made for ID </p>
                            </div>
                        </div>
                    </div>
                    <div className='relative mt-72'>
                        <div className=''>
                            <div className='p-6 bg-gradient-to-b from-[#131316]/20 to-[#131316] backdrop-blur-lg'>
                                <div className='flex flex-row items-center w-full gap-6'>
                                    <div>
                                        {/* <Link to="/search"><button className='text-5xl text-green-600'><i className="fa-solid fa-circle-play" /></button></Link> */}
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
                                    <thead className={`text-left border-b-[1px] text-sm text-gray-400 top-0 sticky bg-black `}>
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
                                        {!playlistTracks || !playlistTracks.tracks ? (

                                            <tr className=''>
                                                <td className='flex justify-center items-center h-full'>
                                                    <MoonLoader color="#36d7b7" />
                                                </td>
                                            </tr>
                                        ) :
                                            (playlistTracks.tracks.map((item, index) => (
                                                <tr className=" border-b  dark:border-gray-700" key={index}>
                                                    <td className='py-1'>{index + 1}</td>
                                                    <th scope="row" className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className='flex gap-2 p-1 w-fit'>
                                                            <div>
                                                                {item.album.images.map((image, index) => (
                                                                    <img key={index} src={image.url} alt="" width="55px" className="rounded-md min-w-[55px]" />
                                                                )).slice(-1)[0]}
                                                            </div>
                                                            <div className='w-full min-w-[80px] max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis'>
                                                                <span className='text-base'>{item.name}</span>
                                                                <p className='text-sm'>{item.artists.map((artist) => (
                                                                    <span key={artist.id}>{artist.name} | </span>
                                                                ))}</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        <div className='whitespace-nowrap overflow-hidden text-ellipsis w-full min-w-[30] max-w-[100px]'>
                                                            <span className=''>{item.album.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">{formatDateToDaysAgo(item.album.release_date)}</td>
                                                    <td className="px-6 py-4">{convertMsToMinutes(item.duration_ms)}</td>
                                                </tr>
                                            ))
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>)}
        </>


    )
}

export default PlaylistDetails