import React, { useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import MainDashboard from './components/main/MainDashboard';
import SpotifyApiState from './api/SpotifyApiState';
import { Route, Routes } from "react-router-dom";




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
        <Route exact path='*' element={<MainDashboard />} />
        {/* <Route
          exact
          path='/'
          element={
            <MainDashboard>
              <MainSection>
                <Route exact path='carddata' element={<CardData />} />
                <Route exact path='mainrightsection' element={<MainRightSection />} />
              </MainSection>
            </MainDashboard>
          }
        /> */}
      </Routes>
    </SpotifyApiState>
  );
}


export default App;
