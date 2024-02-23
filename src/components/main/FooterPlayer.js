import React, { useContext, useEffect, useRef } from 'react'
import image_2 from '../../assets/ab67706f00000002776d882a0eb24571af5dc394.jpeg';
// import SpotifyApiContext from '../../../api/SpotifyApiContext';
import SpotifyApiContext from '../../api/SpotifyApiContext';


const FooterPlayer = (props) => {

  const context = useContext(SpotifyApiContext);
  const { Playtrack, playTrackFooter } = context;

  // if (!playTrackFooter.track) {
  //   console.log("No Track");
  // }
  // const imageUrls = playTrackFooter.icon.image.map(image => image.url);


  const audioRef = useRef(null);

  useEffect(() => {
    // Reset audio element and set new source when playTrackData changes
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load(); // Reload audio element
      audioRef.current.play();
    }
  }, [playTrackFooter]);

  return (
    <footer className='flex flex-row justify-between items-center'>
      {playTrackFooter && <>

        <div>
          <div className='flex gap-2 p-1  rounded-md items-center'>
            <div>
              {
                !playTrackFooter || !playTrackFooter.icon ? (
                  <></>
                ) : (
                  <>
                    {Array.isArray(playTrackFooter.icon) && playTrackFooter.icon.map((image, index) => (
                      <img key={index} src={image.url} alt="" width="55px" className="rounded-md min-w-[55px]" />
                    )).slice(-1)[0]}
                  </>
                )
              }


              {/* <img src={image_2} alt="" width="55px" className='rounded-md min-w-[55px]' /> */}
            </div>
            <div className='w-full'>
              <span className='font-semibold text-sm'>{playTrackFooter.name}</span>
              <p className='text-sm'>{playTrackFooter.artist.map((artist) => (
                <span key={artist.id}>{artist.name} | </span>
              ))}</p>
            </div>
            <div className=''><span><i className="fa-regular fa-heart" /></span></div>
          </div>
        </div>
        <div className='flex flex-row flex-nowrap gap-5 mb-3 items-center'>
          <div className='flex flex-1 gap-4 justify-end text-lg'>
            <button><i className="fa-solid fa-shuffle" /></button>
            <button><i className="fa-solid fa-backward-step" /></button>
          </div>
          <audio ref={audioRef} controls="controls">
            <source src={playTrackFooter.track} type="audio/mpeg" />
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
      </>
      }
    </footer>
  )
}

export default FooterPlayer