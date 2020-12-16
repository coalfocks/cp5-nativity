import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ReactAudioPlayer from 'react-audio-player'
import nativityMix from './media/nativity-mix.mp3'
import shepherdsMix from './media/shepherds-mix.mp3'
import innMix from './media/the-inn-mix.mp3'
import wisemenMix from './media/wisemen-mix.mp3'


function App() {
  const [ current, setCurrent ] = useState()
  const handleOnPlay = ({ target }) => {
    if (target !== current) {
      current && current.pause()
      setCurrent(target)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="title"> Crescent Park Nativity </div>

        <h3>Shepherds</h3>
        <ReactAudioPlayer
          src={shepherdsMix}
          controls
        />
        <h3>The Inn</h3>
        <ReactAudioPlayer
          src={innMix}
          controls
          onPlay={handleOnPlay}
        />
        <h3>Nativity</h3>
        <ReactAudioPlayer
          src={nativityMix}
          controls
          onPlay={handleOnPlay}
        />
        <h3>Nativity</h3>
        <ReactAudioPlayer
          src={nativityMix}
          controls
          onPlay={handleOnPlay}
        />
        <h3>Wisemen</h3>
        <ReactAudioPlayer
          src={wisemenMix}
          controls
          onPlay={handleOnPlay}
        />
      </header>
    </div>
  );
}

export default App;
