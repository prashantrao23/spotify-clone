import React, { useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
// import MainDashboard from './components/main/MainDashboard';
import SpotifyApiState from './api/SpotifyApiState';
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/main/Dashboard';




function App() {

  const [token, setToken] = useState('')

  const getTokenkey = (value) => {
    setToken(value);
  }

  return (
    <SpotifyApiState >
      <Routes>
        <Route exact path='/login' element={<Login getTokenkey={getTokenkey} />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='*' element={<Dashboard />} />
      </Routes>
    </SpotifyApiState>
  );
}


export default App;
