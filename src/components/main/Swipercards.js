import React from 'react'

const Swipercards = (props) => {

    const { image, item, artist } = props;

    // console.log(icon.url);

    return (
        <div className='swipercard p-4 w-fit rounded-md bg-[#181818] min-w-[170px]  max-w-[211px] max-h-[295hx] hover:bg-[#282828] '>
            <div className=''>
                <div className={`shadow-lg shadow-black/50 relative ${artist ? 'rounded-full' : 'rounded-md'} `}>
                    {image.map((image, index) => (
                        <img src={image.url} alt={image.url} key={index} className={`${artist ? 'rounded-full' : 'rounded-md'} mb-4 object-cover aspect-square `} />
                    )).slice(-2)[0]}
                    <button className='play-btn rounded-full bg-green-500 w-[50px] h-[50px] absolute  right-2 '><i className="fa-solid fa-play text-black" /></button>
                </div>
                <div className='w-full truncate'>
                    <p className='font-bold truncate '>{item}</p> 
                </div>
            </div>
        </div>
    )
}

export default Swipercards