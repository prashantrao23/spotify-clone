import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between pt-[11px] pb-[7px] pl-[24px] pr-[15px] bg-gradient-to-r from-[#af2896] to-[#509bf5]'>
            <div className=''>
                <p className='text-[12px]'>PREVIEW OF SPOTIFY</p>
                <p className='text-[17px]'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <div>
                <button className='bg-white  font-semibold text-black rounded-full py-2 px-8'>Sign up for free</button>
            </div>
        </div>
    )
}

export default Footer