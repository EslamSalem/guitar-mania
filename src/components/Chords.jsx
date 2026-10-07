import { useState } from "react";
import Circle5Icon from "./theory/Circle5Icon";
import "../styles/Chords.css";

function Chords() {
  const [keyName, setKeyName] = useState("");

  return (
    <div className="chords-component">
      <p className="key-name">{keyName}</p>
      <Circle5Icon setKeyName={setKeyName}  />
    </div>
  );
}

export default Chords;
