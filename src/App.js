import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ReactAudioPlayer from 'react-audio-player'
// nativity-mix.mp3  shepherds-mix.mp3  the-inn-mix.mp3  wisemen-mix.mp3
import nativityMix from './media/nativity-mix.mp3'
import shepherdsMix from './media/shepherds-mix.mp3'
import innMix from './media/the-inn-mix.mp3'
import wisemenMix from './media/wisemen-mix.mp3'


function App() {
// store current element in state when hit play
// if current isn't new, pause current then set current to new
// play current
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
        <h1 className="title"> Crescent Park Nativity </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>Shepherd Scene</h3>
        <ReactAudioPlayer
          src={shepherdsMix}
          controls
          onPlay={handleOnPlay}
        />
        <h3>Inn Scene</h3>
        <ReactAudioPlayer
          src={innMix}
          controls
          onPlay={handleOnPlay}
        />
        <h3>Nativity Scene</h3>
        <ReactAudioPlayer
          src={nativityMix}
          controls
          onPlay={handleOnPlay}
        />
        <h3>Wisemen Scene</h3>
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
