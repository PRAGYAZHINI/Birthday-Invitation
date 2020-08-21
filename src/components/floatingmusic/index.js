import React, { Fragment, useState } from 'react';
import IconMusic from '@assets/images/music-icon.png';
import IconMusicStop from '@assets/images/music-stop-icon.png';
import MusicBacksound from '@assets/music/Roja.mp3';

import { styMusicFloating } from './styles';

function FloatingMusic() {
  const [play, setPlay] = useState(true);

  const toggleMusic = () => {
    const myAudio = document.getElementById('myAudio');

    if (play) {
      myAudio.pause();
    } else {
      myAudio.play();
    }

    setPlay(!play);
  };

  return (
    <Fragment>
      <div css={styMusicFloating}>
        <audio id="myAudio" autoPlay loop className="hide">
          <source src={MusicBacksound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div onClick={toggleMusic}>
          <img
            src={play ? IconMusic : IconMusicStop}
            className="icon-music"
            alt="icon-music"
            title={`${play ? 'Turn off music' : 'Play music'}`}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default FloatingMusic;
