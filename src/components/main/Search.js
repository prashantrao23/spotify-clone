import React, { useContext } from 'react'
import SpotifyApiContext from '../../api/SpotifyApiContext';
import Swipercards from './Swipercards';

const Search = () => {

  const context = useContext(SpotifyApiContext);
  const { searchKey } = context

  return (
    <section>
      <div className=''>
        <div>
          {!searchKey || (!searchKey.artists && !searchKey.tracks) ? (
            <div className='text-center text-2xl'>
              No Data to display yet ...
            </div>
          ) : (
            <div>

              {/* <section className='p-2'>
                {searchKey.artists && (
                  <div>
                    <div>
                      <p>Artists</p>
                    </div>
                    <div className='grid grid-rows-1 grid-flow-col gap-4'>
                      {searchKey.artists.items.map((artist, index) => (
                        <Swipercards item={artist.name} image={artist.images} />
                      ))}
                    </div>
                  </div>
                )}
              </section> */}
              {searchKey.artists && (
                <div>
                  <p>Artists:</p>
                  {searchKey.artists.items.map((artist, index) => (
                    <p key={index}>
                      <span>{artist.name}</span>
                    </p>
                  ))}
                </div>
              )}

              {/* <section className='p-2'>
                {searchKey.tracks && (
                  <div>
                    <div>
                      <p>Tracks:</p>
                    </div>
                    <div className='grid grid-rows-1 grid-flow-col gap-4'>
                      {searchKey.tracks.items.map((tracks, index) => (
                        <Swipercards item={tracks.name} image={tracks.album.images} />
                      ))}
                    </div>
                  </div>
                )}
              </section> */}
              {searchKey.tracks && (
                <div>
                  <p>Tracks:</p>
                  {searchKey.tracks.items.map((track, index) => (
                    <p key={index}>
                      <span>{track.name}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default Search