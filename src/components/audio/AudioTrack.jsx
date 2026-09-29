import { useState, useRef } from "react";
import ReactAudioSpectrum from "react-audio-spectrum";
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
      <ReactAudioSpectrum
        id="visualizer"
        height={80}
        width={600}
        audioId="solo-track"
        capColor="#d5d5d5"
        capHeight={2}
        meterWidth={11}
        meterCount={100}
        meterColor={[
          { stop: 0, color: '#d5d5d5' },
          { stop: 1, color: '#1a1a1a' }
        ]}
        gap={3}
      />
      <audio
        id="solo-track"
        ref={audioRef}
        src={soloURL}
        onEnded={stopAudio}
      ></audio>
      <PlayPauseBtn isPlaying={isPlaying} toggleAudio={toggleAudio} />
      <StopBtn stopAudio={stopAudio} />
    </div>
  );
}

export default AudioTrack;
