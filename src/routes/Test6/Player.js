import { useReducer, useRef } from 'react';
import { cssVideo } from './style';

const convertTime = (sec) => {
  let m = Math.floor(sec / 60);
  let s = Math.floor(sec % 60);

  const prependZero = (value) => (value = value < 10 ? '0' + value : value);

  m = prependZero(m);
  s = prependZero(s);

  return { m, s };
};

const videoState = {
  paused: true,
  muted: false,
  currentTime: 0,
  duration: 0,
  seekerValue: 0,
};

const videoReducer = (state, { type, payload }) => {
  const { videoPlayer } = payload;

  switch (type) {
    case 'play':
      state.paused = false;
      break;

    case 'pause':
      state.paused = true;
      break;

    case 'seeking':
    case 'timeupdate':
      state.currentTime = videoPlayer.currentTime;
      state.seekerValue =
        (videoPlayer.currentTime / videoPlayer.duration) * 100;
      break;

    case 'volumechange':
      state.muted = videoPlayer.muted;
      break;

    case 'durationchange':
      state.duration = videoPlayer.duration || 0;
      break;

    default:
      break;
  }

  return { ...state };
};

const Player = () => {
  const videoRef = useRef();
  const [state, dispatch] = useReducer(videoReducer, videoState);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleMute = () => {
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
    } else {
      videoRef.current.muted = true;
    }
  };

  const seekTime = (e) => {
    const value = e.target.value;
    const newCurrentTime = (value / 100) * state.duration;

    videoRef.current.currentTime = newCurrentTime;
  };

  const handleVideo = (e) => {
    const type = e.type;
    const videoPlayer = e.target;

    dispatch({ type, payload: { videoPlayer } });
  };

  return (
    <div>
      <video
        ref={videoRef}
        className={cssVideo}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        onPlay={handleVideo}
        onPause={handleVideo}
        onSeeking={handleVideo}
        onTimeUpdate={handleVideo}
        onVolumeChange={handleVideo}
        onDurationChange={handleVideo}
      />
      <button type="button" onClick={togglePlay}>
        {state.paused ? 'Play' : 'Pause'}
      </button>
      <button type="button" onClick={handleMute}>
        {state.muted ? 'Unmute' : 'Mute'}
      </button>
      <input type="range" value={state.seekerValue} onChange={seekTime} />
      <span>
        {convertTime(state.currentTime).m}:{convertTime(state.currentTime).s}/
        {convertTime(state.duration).m}:{convertTime(state.duration).s}
      </span>
    </div>
  );
};

export default Player;
