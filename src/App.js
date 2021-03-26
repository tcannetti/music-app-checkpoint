import Header from './components/Header'
import Login from './components/Login'
import Slider from './components/Dashboard/Slider'

import { useState } from "react";

function App() {
  const [volume, setVolume] = useState(30)
  return (
    <div className="App">
      <Header />
      <Slider volume={volume} setVolume={setVolume}/>

      <div>{volume >= 80 && <p>Listening to music at a high volume can cause long term hearing loss!</p>}</div>
    </div>
  );
}

export default App;
