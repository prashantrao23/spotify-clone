import React, { useState } from 'react'
import SpotifyApiContext from './SpotifyApiContext'
import axios from "axios";


const SpotifyApiState = (props) => {

  const [categorydata, setCategorydata] = useState([])
  const [allplaylistdata, setAllPlaylistdata] = useState([])
  const [singleplaylistdata, setSinglePlaylistdata] = useState([])
  const [getAlbum, setGetAlbum] = useState([])
  const [getUser, setGetUser] = useState([])
  const [searchKey, setSearchkey] = useState("")
  const [likedPlaylist, setLikedPlaylist] = useState("")
  const [likedSong, setLikedSong] = useState([])
  const [userPlaylist, setUserPlaylist] = useState([])
  const [userPlaylistByID, setUserPlaylistByID] = useState([])
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [dominantColor, setDominantColor] = useState(null);
  const [playTrackFooter, setPlayTrackFooter] = useState(null);

  const host = 'http://127.0.0.1:5000'


  const accessToken = sessionStorage.getItem('token');
  const customauthToken = localStorage.getItem('token');
  // console.log('Token from apistate',accessToken)



  const getCategories = async () => {
    if (!accessToken) {
      console.error('Access token not available yet.');
      return;
    }
    const options = {
      method: 'GET',
      url: `https://api.spotify.com/v1/browse/categories`,
      params: {
        country: 'IN',
        offset: '0',
        limit: '10',
      },
      headers: { 'Authorization': 'Bearer ' + accessToken }
    };

    try {
      const response = await axios.request(options);
      // console.log('categories data from api state', response.data);
      setCategorydata(response.data);

    } catch (error) {
      console.error('Error Fetching categories data', error.response.data.error);
    }
  };

  const getAllPlaylists = async () => {
    if (!accessToken) {
      console.error('Access token not available yet.');
      return;
    }
    const options = {
      method: 'GET',
      url: `https://api.spotify.com/v1/browse/featured-playlists`,
      params: {
        country: 'IN',
        offset: '0',
        limit: '10',
      },
      headers: { 'Authorization': 'Bearer ' + accessToken }
    };

    try {
      const response = await axios.request(options);
      // console.log('Fetch All playlist data', response.data);
      setAllPlaylistdata(response.data);

    } catch (error) {
      console.error('Error Fetching All playlist data', error.response.data.error);
    }

  };

  const getPlaylists = async (id) => {
    if (!accessToken) {
      console.error('Access token not available yet.');
      return;
    }

    const options = {
      method: 'GET',
      url: `https://api.spotify.com/v1/playlists/${id}`,
      // params: {
      //   id: id,
      //   // lang: 'en'
      // },
      headers: { 'Authorization': 'Bearer ' + accessToken }
    };

    try {
      const response = await axios.request(options);
      // console.log('Fetch playlist data', response.data);
      setSinglePlaylistdata(response.data);

    } catch (error) {
      console.error('Error Fetching playlist data', error.response.data.error);
    }

  };

  const getNewAlbums = async () => {
    if (!accessToken) {
      console.error('Access token not available yet.');
      return;
    }

    const options = {
      method: 'GET',
      url: `https://api.spotify.com/v1/browse/new-releases`,
      // params: {
      //   id: id,
      //   // lang: 'en'
      // },
      headers: { 'Authorization': 'Bearer ' + accessToken }
    };

    try {
      const response = await axios.request(options);
      // console.log('Fetch album data', response.data);
      setGetAlbum(response.data);

    } catch (error) {
      console.error('Error Fetching album data', error.response.data.error);
    }

  };

  const getTracks = async (id) => {
    // console.log(id);
    if (!accessToken) {
      console.error('Access token not available yet.');
      return;
    }

    const options = {
      method: 'GET',
      url: `https://api.spotify.com/v1/tracks`,
      params: {
        ids: id.join(','),
      },
      headers: { 'Authorization': 'Bearer ' + accessToken }
    };

    // console.log("options", options);

    try {
      const response = await axios.request(options);
      // console.log('Fetch tracks', response.data);
      setPlaylistTracks(response.data);

    } catch (error) {
      console.error('Error Fetching album data', error.response.data.error);
      setPlaylistTracks([]);
    }

  };

  const getAllUserPlaylist = async () => {
    if (!accessToken) {
      console.error('Access token not available yet.');
      return;
    }

    const options = {
      method: 'GET',
      url: `${host}/api/playlist/fetchallplaylist`,
      headers: {
        "Content-Type": "application/json",
        "auth-token": customauthToken
      }
    };

    try {
      const response = await axios.request(options);
      // console.log('Fetch User Playlist', response.data);
      setUserPlaylist(response.data);

    } catch (error) {
      console.error('Error User Playlist', error.response.data.error);
    }

  };

  const getUserPlaylistByID = async (id) => {
    if (!accessToken) {
      console.error('Access token not available yet.');
      return;
    }

    const options = {
      method: 'GET',
      url: `${host}/api/playlist/fetchplaylistbyid/${id}`,
      headers: {
        "Content-Type": "application/json",
        "auth-token": customauthToken
      }
    };

    try {
      const response = await axios.request(options);
      // console.log('Fetch User Playlist by ID', response.data);
      setUserPlaylistByID(response.data);

    } catch (error) {
      console.error('Error User Playlist ID', error.response.data.error);
    }

  };

  const getSearchItem = async (query) => {
    // e.preventDefault()

    const options = {
      method: 'GET',
      url: `https://api.spotify.com/v1/search?`,
      params: {
        q: query,
        type: `artist,track,album,playlist`,
        limit: 5,
        include_external: 'audio'
      },
      headers: { 'Authorization': 'Bearer ' + accessToken }
    };

    try {
      const response = await axios.request(options);
      console.log('Search data', response.data);
      setSearchkey(response.data);

    } catch (error) {
      console.error('Error Searching ', error.response.data.error);
    }

  }

  const getuserdetail = async () => {
    if (!customauthToken) {
      console.error('Access token not available yet.');
      return;
    }

    const options = {
      method: 'GET',
      url: `${host}/api/auth/getuser`,
      headers: {
        "Content-Type": "application/json",
        "auth-token": customauthToken
      }
    };

    try {
      const response = await axios.request(options);
      // console.log('Fetch user data', response.data);
      setGetUser(response.data);
      localStorage.setItem("user_id", response.data.user._id);

    } catch (error) {
      console.error('Error Fetching user data', error.response.data.error);
    }
  }

  const checklikedsong = async (playlist_id) => {
    if (!customauthToken) {
      console.error('Access token not available yet.');
      return;
    }
    const options = {
      method: 'GET',
      url: `${host}/api/tracks/fetchlikedtracks/${playlist_id}`,
      headers: {
        "Content-Type": "application/json",
        "auth-token": customauthToken
      }
    };
    // console.log("options", options)
    try {
      const response = await axios.request(options);
      // console.log('Fetch liked tracks API State', response.data);
      setLikedSong(response.data);
    } catch (error) {
      console.error('Error Fetching liked tracks', error.response.data.error);
    }
  }

  const getLikedPlaylist = async () => {
    const options = {
      method: 'GET',
      url: `${host}/api/playlist/fetchlikedplaylist`,
      headers: { "Content-Type": "application/json", "auth-token": customauthToken },
    };

    try {
      const response = await axios.request(options);
      setLikedPlaylist(response.data);
      // console.log('Liked playlist - ', response.data);

    } catch (error) {
      console.error('Error fetching liked playlist ', error.response.data.error);
    }
  }


  const ImageColor = async (imageUrl) => {
    try {
      const image = new Image();
      image.crossOrigin = 'Anonymous';
      image.src = imageUrl;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const colorCounts = {};

        for (let i = 0; i < imageData.length; i += 4) {
          const color = `rgb(${imageData[i]}, ${imageData[i + 1]}, ${imageData[i + 2]})`;
          if (colorCounts[color]) {
            colorCounts[color]++;
          } else {
            colorCounts[color] = 1;
          }
        }

        let maxCount = 0;
        let dominantColor = null;

        for (const color in colorCounts) {
          if (colorCounts[color] > maxCount) {
            maxCount = colorCounts[color];
            dominantColor = color;
          }
        }

        setDominantColor(dominantColor);
      };
    } catch (error) {
      console.error('Error detecting vibrant color:', error);
    }
  }

  const Playtrack = async (data) => {
    // console.log(data)
    setPlayTrackFooter(data)
  }

  return (
    <SpotifyApiContext.Provider value={{
      categorydata, getCategories, allplaylistdata, getAllPlaylists, singleplaylistdata, getPlaylists,
      accessToken, getNewAlbums, getAlbum, getSearchItem, searchKey, getuserdetail, getUser, getLikedPlaylist, likedPlaylist, checklikedsong,
      likedSong, getAllUserPlaylist, userPlaylist, getUserPlaylistByID, userPlaylistByID, getTracks, playlistTracks, ImageColor, dominantColor, Playtrack, playTrackFooter
    }}>
      {props.children}
    </SpotifyApiContext.Provider>
  )
}

export default SpotifyApiState