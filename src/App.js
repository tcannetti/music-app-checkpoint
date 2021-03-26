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
  const [volume, setVolume] = useState(30)
  const [quality, setQuality] = useState('2')
  return (
    <div className="App">
      <Header />
      <CompCard>
       <Switches/>
      </CompCard>
      <CompCard>
        <Slider volume={volume} setVolume={setVolume}/>
      </CompCard>
      <CompCard>
        <Select quality={quality} setQuality={setQuality}/>
      </CompCard>
      <Typography>System Notifications:</Typography>
      <div>{volume >= 80 && <p>Listening to music at a high volume can cause long term hearing loss!</p>}</div>
      <div>{quality =='1' && <p>Music quality is degraded. Increase quality if your connection allows it.</p>}</div>
    </div>
  );
}

export default App;
