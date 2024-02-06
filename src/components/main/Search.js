import React, { useContext } from 'react'
import SpotifyApiContext from '../../api/SpotifyApiContext';
import Swipercards from './Swipercards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Search = () => {

  const context = useContext(SpotifyApiContext);
  const { searchKey } = context

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

  const breakpoints = {
    944: {
      slidesPerView: 3,
    },
    1144: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1644: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1844: {
      slidesPerView: 7,
      spaceBetween: 20,
    }
  }

  return (
    <section className='overflow-hidden'>
      <div className=''>

        <div className='py-2'>
          <section className='p-2 '>
            {searchKey.artists && (
              <div className="w-full p-4 ">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Artist</h5>
                  <a href="/" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                  </a>
                </div>
                <div className='flow-root overflow-x-auto'>
                  <ul className=" dark:divide-gray-700 grid grid-flow-col gap-4">

                    {searchKey.artists.items.map((artist, index) => (
                      <li key={index}>
                        <Swipercards item={artist.name} image={artist.images} artist={true} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>
        </div>

        <div className='py-2'>
          {searchKey.tracks && (
            <div className="w-full p-4 ">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Songs</h5>
                <a href="/" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {searchKey.tracks.items.map((tracks, index) => (
                    <li className="py-3 sm:py-4" key={index}>
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {tracks.album.images.map((image, index) => (
                            <img src={image.url} alt={image.url} key={index} className="w-8 h-8 rounded-full" />
                          )).slice(-2)[0]}
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {tracks.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {tracks.artists.map((artist, index) => (
                              <span key={index}>{artist.name},</span>
                            ))}
                          </p>
                        </div>
                        <div className="mx-1 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {convertMsToMinutes(tracks.duration_ms)}
                        </div>
                        <div className="mx-1 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          <i className="fa-regular fa-heart" />
                        </div>
                      </div>
                    </li>
                  ))
                  }
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className='py-2'>
          <section className='p-2 '>
            {searchKey.artists && (
              <div className="w-full p-4 ">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Album</h5>
                  <a href="/" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                  </a>
                </div>
                <div className='flow-root overflow-x-auto'>
                  <ul className=" dark:divide-gray-700 grid grid-flow-col gap-4">

                    {searchKey.albums.items.map((album, index) => (
                      <li key={index}>
                        <Swipercards item={album.name} image={album.images} artist={false} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>
        </div>


      </div>

    </section>
  )
}

export default Search