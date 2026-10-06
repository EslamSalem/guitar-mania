import { useState } from "react";
import "../styles/Scales.css";

function Scales() {
  const [activeScale, setActiveScale] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scalesImages = {
    "Major Scale": "src/assets/theory/scales/Major Scale.png",
    "Pentatonic Scale": "src/assets/theory/scales/Pentatonic Scale.png",
    "Harmonic Scale": "src/assets/theory/scales/Harmonic Scale.png",
  };

  function changeScale(scale) {
    setActiveScale(scale);
    setIsMenuOpen(false);
  }

  return (
    <div className="scales-component">
      <div className="scales-drop-down">
        <div
          className="scales-drop-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="scale-name">
            {activeScale ? activeScale : "Pick a Scale"}
          </span>
          <span className="arrow-icon">^</span>
        </div>
        {isMenuOpen ? (
          <ul className="scales-drop-menu">
            {Object.keys(scalesImages).map((scale) => (
              <li key={scale} onClick={() => changeScale(scale)}>
                {scale}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <img
        src={
          activeScale
            ? scalesImages[activeScale]
            : "src/assets/theory/scales/Fretboard.png"
        }
        className="fretboard-img"
        alt="Fretboard"
      />
    </div>
  );
}

export default Scales;
