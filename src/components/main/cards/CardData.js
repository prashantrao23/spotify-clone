import React, { useEffect, useContext } from 'react'
import SpotifyApiContext from '../../../api/SpotifyApiContext';
import MoonLoader from "react-spinners/ClipLoader";
import { Link, useParams } from 'react-router-dom';


const CardData = (props) => {

    const context = useContext(SpotifyApiContext);
    const { singleplaylistdata, getPlaylists } = context;

    const { id } = useParams();
    console.log('ID from url', id);

    if (!singleplaylistdata || !singleplaylistdata.name) {
        console.log("No card data")
    }


    useEffect(() => {
        getPlaylists(id);
        // eslint-disable-next-line
    }, []);

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

                    <div className='h-auto bg-gradient-to-b from-[#302972] absolute top-0 left-0 right-0 pt-10 pb-40'>
                        <div className='pl-8 flex flex-row gap-5 justify-start items-center mt-10'>
                            <div className='h-[235px] w-[235px] max-[1280px]:h-[192px] max-[1280px]:w-[192px] min-h-[192px] min-w-[192px] drop-shadow-2xl'><img src={singleplaylistdata.images[0].url} alt="" /></div>
                            <div>
                                <p>Playlist</p>
                                <p className='text-[5vw] font-bold overflow-hidden whitespace-nowrap text-ellipsis w-full'>{singleplaylistdata.name}</p>
                                <p className='overflow-hidden whitespace-nowrap text-ellipsis'>{singleplaylistdata.description}</p>
                                <p>Made for ID </p>
                            </div>
                        </div>
                    </div>
                    <div className='relative mt-72'>
                        <div className=''>
                            <div className='p-6 bg-gradient-to-b from-[#131316]/20 to-[#131316] backdrop-blur-lg'>
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
                            <div className='px-6 bg-[#131316] font-light'>
                                <table className="table-auto w-full ">
                                    <thead className={`text-left border-b-[1px] text-sm text-gray-400 top-0 sticky bg-black `}>
                                        <tr>
                                            <th className='font-medium'>#</th>
                                            <th className='font-medium'>Title</th>
                                            <th className='font-medium max-[840px]:hidden'>Album</th>
                                            <th className='font-medium max-[1070px]:hidden'>Date added</th>
                                            <th className='font-medium'><i className="fa-regular fa-clock" /></th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-left'>
                                        {!singleplaylistdata.tracks || !singleplaylistdata.tracks.items ? (

                                            <tr className=''>
                                                No Data to display yet ...
                                            </tr>
                                        ) :
                                            (singleplaylistdata.tracks.items.map((item, index) => (
                                                <tr key={index}>
                                                    <td className='py-1'>{index + 1}</td>
                                                    <td className='py-1'>
                                                        <div className='flex gap-2 p-1'>
                                                            <div>{item.track.album.images
                                                                .map((image, index) => (
                                                                    <img
                                                                        key={index} // Don't forget to add a unique key when rendering in a loop
                                                                        src={image.url}
                                                                        alt=""
                                                                        width="55px"
                                                                        className="rounded-md min-w-[55px]"
                                                                    />
                                                                ))
                                                                .slice(-1)[0]}</div>
                                                            <div className='w-full overflow-hidden whitespace-nowrap text-ellipsis'>
                                                                <span className='text-base'>{item.track.name}</span>
                                                                <p className='text-sm'>{item.track.album.artists.map((artist) => (
                                                                    <span key={artist.id}>{artist.name}</span>
                                                                ))}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='max-[840px]:hidden py-1'>{item.track.album.name}</td>
                                                    <td className='max-[1070px]:hidden py-1'>{formatDateToDaysAgo(item.added_at)}</td>
                                                    <td className='py-1'>{convertMsToMinutes(item.track.duration_ms)}</td>
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

            )}
        </>
    )
}

export default CardData