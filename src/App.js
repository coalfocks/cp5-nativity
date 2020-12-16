import { useState } from 'react'

import './App.css';
import ReactAudioPlayer from 'react-audio-player'

import nativityMix from './media/nativity-mix.mp3'
import shepherdsMix from './media/shepherds-mix.mp3'
import innMix from './media/the-inn-mix.mp3'
import wisemenMix from './media/wisemen-mix.mp3'

import logo from './bishopric.jpg'


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
        <div className="title"> Crescent Park Nativity </div>

        <h3>Shepherds</h3>
        <ReactAudioPlayer
          src={shepherdsMix}
          controls
          onPlay={handleOnPlay}
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
        <h3>Wisemen</h3>
        <ReactAudioPlayer
          src={wisemenMix}
          controls
          onPlay={handleOnPlay}
        />

        <p></p>
        <hr />

        <img className="logo" src={logo} alt="" />

        <p className="bishopric">
          Crescent Park Fifth Ward Bishopric Message
        </p>
        <p className="bishopric">
          When Christ was born in Jerusalem, it was known to very few people in
          the Middle East area.  Yes, shepherds were told about the birth by angels
          and wise men followed the new star.  Of course his mother and
          Joseph knew as well.  But for the majority of people in Israel, the night
          Christ was born was probably a night just like many others.
        </p>
        <p className="bishopric">
          This was not the case in the Americas, the sign announcing Christ's birth wasn't just a new 
          star, it was also a day and a night and a day without any darkness.
          The night of Christ's birth here was filled with unspeakable light.  The believers knew 
          this was the sign that Christ had been born.  Many who had not previously believed,
          gained new faith and were baptized.  This was important because the
          wicked people who lived in the Americas, knew of the
          prophecy concerning the birth of Christ, and had decided to kill all
          believers if the sign did not come true by a certain day.  We can read in the
          Book of Mormon how a prophet prayed for deliverance and the voice of
          the Lord came to him saying:
        </p>
        <p className="bishopric">
          "Lift up your head and be of good cheer; for behold, the time is at
          hand, and on this night shall the sign be given, and on the morrow
          come I into the world..." (3 Nephi 1:13)
        </p>
        <p className="bishopric">
          When the sign came as a day, a night, and a day as if they were one
          day, even the wicked could not deny it.  From the night of
          His birth, Christ was saving his people, quite literally.  The
          righteous were saved because light filled the sky on
          the night of Christ's birth.
        </p>
        <p className="bishopric">
          Just like the believers in the Americas, we can focus on Christ
          despite the circumstances, struggles, and challenges that surround us.
          Likewise, giving birth in a stable was surely not Mary's first choice,
          but it did fulfill prophecy--meaning a way was prepared for her to
          overcome her challenges.  We hope that as you confront the challenges
          in your life, just like Mary and Joseph or the believers in the
          Americas did that night so long ago, you will find a way with the
          Lord's help to find peace and happiness.  "Peace I leave with you, my
          peace I give unto you: not as the world giveth, give I unto you.  Let
          not your heart be troubled, neither let if be afraid." (John 14:27).
        </p>
        <p className="bishopric">
          May the Spirit of Christmas fill you with light.  Whether it be a
          small light, like a star in a night sky, a brighter light like angels
          singing in heaven, or a light bright enough to literally change night
          to day, may His light fill your soul this season.
        </p>
        <p className="bishopric">
          Merry Christmas and Happy New Year!
        </p>
        <p className="bishopric">
          Warm regards,
        </p>
        <p className="bishopric">
          Bishop Jeff Waddell <br />
          1st Counselor Tom Scott <br />
          2nd Counselor John Hansen
        </p>
    </header>
    </div>
  );
}

export default App;
