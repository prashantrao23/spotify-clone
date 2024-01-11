import React, { useState } from 'react'
import SpotifyApiContext from './SpotifyApiContext'
import axios from "axios";

const SpotifyApiState = (props) => {

  const [categorydata, setCategorydata] = useState([])
  const [allplaylistdata, setAllPlaylistdata] = useState([])
  const [singleplaylistdata, setSinglePlaylistdata] = useState([])
  const [getAlbum, setGetAlbum] = useState([])



  const accessToken = localStorage.getItem('token');
  console.log('Token from apistate',accessToken)



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
      console.log('categories data from api state', response.data);
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
      console.log('Fetch All playlist data', response.data);
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
      console.log('Fetch playlist data', response.data);
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
      console.log('Fetch album data', response.data);
      setGetAlbum(response.data);

    } catch (error) {
      console.error('Error Fetching album data', error.response.data.error);
    }

  };


  return (
    <SpotifyApiContext.Provider value={{ categorydata, getCategories, allplaylistdata, getAllPlaylists, singleplaylistdata, getPlaylists, accessToken, getNewAlbums, getAlbum }}>
      {props.children}
    </SpotifyApiContext.Provider>
  )
}

export default SpotifyApiState