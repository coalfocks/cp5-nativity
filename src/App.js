import logo from './logo.svg';
import './App.css';
import ReactAudioPlayer from 'react-audio-player'
// nativity-mix.mp3  shepherds-mix.mp3  the-inn-mix.mp3  wisemen-mix.mp3
import nativityMix from './media/nativity-mix.mp3'
import shepherdsMix from './media/shepherds-mix.mp3'
import innMix from './media/the-inn-mix.mp3'
import wisemenMix from './media/wisemen-mix.mp3'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Crescent Park Nativity </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>Nativity Scene</h3>
        <ReactAudioPlayer
          src={nativityMix}
          controls
        />
        <h3>Shepherd Scene</h3>
        <ReactAudioPlayer
          src={shepherdsMix}
          controls
        />
        <h3>Inn Scene</h3>
        <ReactAudioPlayer
          src={innMix}
          controls
        />
        <h3>Wisemen Scene</h3>
        <ReactAudioPlayer
          src={wisemenMix}
          controls
        />
      </header>
    </div>
  );
}

export default App;
