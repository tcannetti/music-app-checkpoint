import Header from './components/Header'
import Login from './components/Login'
import Slider from './components/Dashboard/Slider'
import Select from './components/Dashboard/Select'
import CompCard from './components/Card/Card'
import Switches from './components/Dashboard/Online'

import { useState } from "react";
import { Typography } from '@material-ui/core';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [online, setOnline] = useState(true)
  const [volume, setVolume] = useState(30)
  const [quality, setQuality] = useState('1')

  const handleLogin = () => {
    setLoggedIn(true)
  }

  return (
    <div className="App">
      <Header />
      {loggedIn === true ? (
        <div>
          <CompCard>
          <Switches online={online} setOnline={setOnline}/>
          </CompCard>
          <CompCard>
            <Slider volume={volume} setVolume={setVolume}/>
          </CompCard>
          <CompCard>
            <Select quality={quality} setQuality={setQuality}/>
          </CompCard>
          <Typography>System Notifications:</Typography>
        </div>
      ) : (
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} handleLogin={() => handleLogin()}/>
      )}
      <div className="notifications">
        {online === false && <p>Your application is offline. You won't be able to share or stream music to other devices.</p>}
        {volume >= 80 && <p>Listening to music at a high volume can cause long term hearing loss!</p>}
        {quality ==='1' && <p>Music quality is degraded. Increase quality if your connection allows it.</p>}
      </div>
    </div>
  );
}

export default App;
