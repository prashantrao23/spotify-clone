import React, { useContext, useEffect, useRef, useState } from 'react'
// import SpotifyApiContext from '../../../api/SpotifyApiContext';
import SpotifyApiContext from '../../api/SpotifyApiContext';


const FooterPlayer = (props) => {

  const context = useContext(SpotifyApiContext);
  const { playTrackFooter, checklikedsong, likedSong, likedPlaylist, addingTrackToLiked, removingTrackFromLiked } = context;
  const [isToggle, setIsToggle] = useState(false)

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

  useEffect(() => {
    if (likedPlaylist && likedPlaylist._id) {
      sendlikedplaylistid();
    }
    // eslint-disable-next-line
  }, [likedPlaylist]);

  const sendlikedplaylistid = async () => {
    await checklikedsong(likedPlaylist._id);
  };

  // const toggle = (index) => {
  //   setIsToggle(isToggle === index ? null : index);
  // };

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


  return (
    <footer className='grid grid-cols-4 gap-4'>
      {playTrackFooter && <>

        <div className=''>
          <div className='flex gap-2 p-1  rounded-md items-center flex-shrink-0'>
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
            <div className='w-full truncate'>
              <span className='font-semibold text-sm'>{playTrackFooter.name}</span>
              <p className='text-sm'>{playTrackFooter.artist.map((artist) => (
                <span key={artist.id}>{artist.name} | </span>
              ))}</p>
            </div>
            {
              likedSong.some(track => track.track_id === playTrackFooter.track_id) ? (
                <button className='dislike active' onClick={() => handleRemoveFromLiked(playTrackFooter.track_id, likedPlaylist._id)}>
                  <i className="fa-solid fa-heart text-red-800" />
                </button>
              ) : (
                <button className='like' onClick={() => handleSubmit(playTrackFooter.track_id, likedPlaylist._id)}>
                  <i className="fa-regular fa-heart" />
                </button>
              )
            }
          </div>
        </div>
        <div className='col-span-2'>
          <div className='flex flex-row flex-nowrap gap-5 mb-3 items-center justify-center '>
            {/* <div className='flex flex-1 gap-4 justify-end text-lg'>
            <button><i className="fa-solid fa-shuffle" /></button>
            <button><i className="fa-solid fa-backward-step" /></button>
          </div> */}
            <audio ref={audioRef} controls="controls">
              <source src={playTrackFooter.track} type="audio/mpeg" />
            </audio>
            {/* <div className='flex flex-1 gap-4 text-lg'>
            <button><i className="fa-solid fa-forward-step" /></button>
            <button><i className="fa-solid fa-repeat" /></button>
          </div> */}
          </div>
        </div>
        <div className='flex items-center justify-end'>
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