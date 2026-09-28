import { useState, useRef } from "react";
import PlayPauseBtn from "./PlayPauseBtn";
import StopBtn from "./StopBtn";
import "../../styles/Audio-Track.css";

function AudioTrack({ soloURL }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleAudio() {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function stopAudio() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  }

  return (
    <div className="audio-track">
      <audio ref={audioRef} src={soloURL} onEnded={stopAudio}></audio>
      <PlayPauseBtn isPlaying={isPlaying} toggleAudio={toggleAudio} />
      <StopBtn stopAudio={stopAudio} />
    </div>
  );
}

export default AudioTrack;
