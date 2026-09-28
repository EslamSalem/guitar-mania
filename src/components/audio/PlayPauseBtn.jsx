import PlayPauseIcon from "./PlayPauseIcon";

function PlayPauseBtn({ isPlaying, toggleAudio }) {
  return (
    <button className="audio-control-btn play-pause-btn" onClick={toggleAudio}>
      <PlayPauseIcon isPlaying={isPlaying} />
    </button>
  );
}

export default PlayPauseBtn;
