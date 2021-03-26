import Header from './components/Header'
import Login from './components/Login'
import Slider from './components/Dashboard/Slider'
import CompCard from './components/Card/Card'

import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [volume, setVolume] = useState(30)
  const [quality, setQuality] = useState('2')
  return (
    <div className="App">
      <Header />
      <CompCard body='Overrides all other sound settings of this application.'>
        <Slider volume={volume} setVolume={setVolume}/>
      </CompCard>
      <div>{volume >= 80 && <p>Listening to music at a high volume can cause long term hearing loss!</p>}</div>
    </div>
  );
}

export default App;
