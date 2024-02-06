import React from 'react'
import image_2 from '../../assets/ab67706f00000002776d882a0eb24571af5dc394.jpeg';


const FooterPlayer = () => {
  return (
    <footer className='flex flex-row justify-between items-center'>
      <div>
        <div className='flex gap-2 p-1  rounded-md items-center'>
          <div>
            <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' />
          </div>
          <div className='w-full'>
            <span className='font-semibold text-sm'>Song name playing</span>
            <p className='text-sm'><span>Artist</span></p>
          </div>
          <div className=''><span><i className="fa-regular fa-heart" /></span></div>
        </div>
      </div>
      <div className='flex flex-row flex-nowrap gap-5 mb-3 items-center'>
        <div className='flex flex-1 gap-4 justify-end text-lg'>
          <button><i className="fa-solid fa-shuffle" /></button>
          <button><i className="fa-solid fa-backward-step" /></button>
        </div>
        <audio controls="controls">
    <source src="https://p.scdn.co/mp3-preview/1456b2c25081430313dd1c81c505f98d27585075?cid=e16d2adc1b4d4d1ea12fed9db89c4179" type="audio/mpeg"/>
  </audio>
        <div className='flex flex-1 gap-4 text-lg'>
          <button><i className="fa-solid fa-forward-step" /></button>
          <button><i className="fa-solid fa-repeat" /></button>
        </div>
      </div>
      <div>
        <div className="">
          <span><i className="fa-solid fa-volume-high" /></span>
          {/* <input type="range" className="bg-white" min="0" max="100" step="1" value="50" onChange={''} /> */}
        </div>
      </div>
    </footer>
  )
}

export default FooterPlayer