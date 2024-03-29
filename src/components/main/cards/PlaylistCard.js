import React from 'react'

const PlaylistCard = (props) => {

    const { image, item, getplaylistID } = props;

    return (
        <div className='p-4 w-fit isolate rounded-md bg-[#181818] min-w-[170px] min-h-[255px] max-w-[211px] max-h-[295hx] hover:bg-[#282828]'>
            <div className=''>
                <div className='shadow-lg shadow-black/50 relative'>
                    {image.map((image, index) => (
                        <img src={image.url} alt={image.url} key={index} className='rounded-md mb-4 w-full' />
                    ))}
                    {/* <img src={icon.url} alt={icon.url} className='rounded-md mb-4' /> */}
                    <button className='play-btn rounded-full bg-green-500 w-[50px] h-[50px] absolute  right-2' onClick={() => { getplaylistID(item.id) }}><i className="fa-solid fa-play text-black" /></button>
                </div>
                <div>
                    <p className='font-bold truncate'>{item.name}</p>
                    {/* <p className='text-sm '>{item.description}</p> */}
                </div>
            </div>
        </div>
    )
}

export default PlaylistCard