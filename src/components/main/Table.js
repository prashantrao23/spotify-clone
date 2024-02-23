import React from 'react'

const Table = (props) => {

    const { tracks } = props;

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
        <table className="table-auto w-full overflow-x-auto">
            <thead className={`text-left border-b-[1px] text-sm text-gray-400 top-0 sticky bg-black`}>
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
                {!tracks || !tracks.length ? (
                    <tr className=''>
                        <td className='flex justify-center items-center h-full'>
                            {/* You can place your loader component here */}
                        </td>
                    </tr>
                ) : (
                    tracks.map((item, index) => (
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
                )}
            </tbody>
        </table>
    )
}

export default Table