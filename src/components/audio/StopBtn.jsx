import StopIcon from "./StopIcon";

function StopBtn({ stopAudio }) {
  return (
    <button className="audio-control-btn stop-btn" onClick={stopAudio}>
      <StopIcon />
    </button>
  );
}

export default StopBtn;
