import { useState } from "react";
import { slices } from "./CircleSlices.js";
import "../../styles/Circle5Icon.css";

function Circle5Icon({ setKeyName }) {
  const [hoveredKey, setHoveredKey] = useState(null);

  const outerWedgePath =
    "M 237.9 68.2 A 240 240 0 0 1 362.1 68.2 L 342.7 140.9 A 165 165 0 0 0 257.3 140.9 Z";
  const innerWedgePath =
    "M 257.3 140.9 A 165 165 0 0 1 342.7 140.9 L 324.6 208.2 A 95 95 0 0 0 275.4 208.2 Z";

  const getGroupDetails = (targetKey) => {
    if (!targetKey) return { relatedKeys: new Set(), activeColor: null };

    const sliceIndex = slices.findIndex(
      (s) => s.name === targetKey || s.minor === targetKey,
    );
    if (sliceIndex === -1) return { relatedKeys: new Set(), activeColor: null };

    const total = slices.length;
    const prevIdx = (sliceIndex - 1 + total) % total;
    const currIdx = sliceIndex;
    const nextIdx = (sliceIndex + 1) % total;

    const relatedKeys = new Set([
      slices[prevIdx].name,
      slices[prevIdx].minor,
      slices[currIdx].name,
      slices[currIdx].minor,
      slices[nextIdx].name,
      slices[nextIdx].minor,
    ]);

    const activeColor = slices[currIdx].color;

    setKeyName(slices[currIdx].keyName);

    return { relatedKeys, activeColor };
  };

  const { relatedKeys, activeColor } = getGroupDetails(hoveredKey);

  if (!hoveredKey) setKeyName("");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      width="100%"
      height="100%"
      className="circle-of-fifths"
    >
      <circle cx="300" cy="300" r="240" className="bg-outer" />
      <circle cx="300" cy="300" r="165" className="bg-mid" />
      <circle cx="300" cy="300" r="95" className="bg-inner" />

      <g className="spoke">
        {slices.map((s) => (
          <line
            key={`spoke-${s.angle}`}
            x1="300"
            y1="60"
            x2="300"
            y2="205"
            transform={`rotate(${s.angle + 15} 300 300)`}
          />
        ))}
      </g>

      <g id="major-hitboxes">
        {slices.map((s) => {
          const isHighlighted = relatedKeys.has(s.name);
          return (
            <path
              key={`maj-cell-${s.name}`}
              d={outerWedgePath}
              className="cell-hitbox"
              style={{
                fill: isHighlighted ? activeColor : undefined,
                fillOpacity: isHighlighted ? 0.75 : 0,
              }}
              transform={`rotate(${s.angle} 300 300)`}
              onMouseEnter={() => setHoveredKey(s.name)}
              onMouseLeave={() => setHoveredKey(null)}
            />
          );
        })}
      </g>

      <g id="minor-hitboxes">
        {slices.map((s) => {
          const isHighlighted = relatedKeys.has(s.minor);
          return (
            <path
              key={`min-cell-${s.minor}`}
              d={innerWedgePath}
              className="cell-hitbox"
              style={{
                fill: isHighlighted ? activeColor : undefined,
                fillOpacity: isHighlighted ? 0.75 : 0,
              }}
              transform={`rotate(${s.angle} 300 300)`}
              onMouseEnter={() => setHoveredKey(s.minor)}
              onMouseLeave={() => setHoveredKey(null)}
            />
          );
        })}
      </g>

      <g className="txt-maj">
        <text x="300" y="97.5">
          C
        </text>
        <text x="402.5" y="125">
          G
        </text>
        <text x="475" y="197.5">
          D
        </text>
        <text x="502.5" y="300">
          A
        </text>
        <text x="475" y="402.5">
          E
        </text>
        <text x="402.5" y="475">
          B C<tspan className="acc">♭</tspan>
        </text>
        <text x="300" y="502.5">
          G<tspan className="acc">♭</tspan> F♯
        </text>
        <text x="197.5" y="475">
          D<tspan className="acc">♭</tspan> C♯
        </text>
        <text x="125" y="402.5">
          A<tspan className="acc">♭</tspan>
        </text>
        <text x="97.5" y="300">
          E<tspan className="acc">♭</tspan>
        </text>
        <text x="125" y="197.5">
          B<tspan className="acc">♭</tspan>
        </text>
        <text x="197.5" y="125">
          F
        </text>
      </g>

      <g className="txt-min">
        <text x="300" y="170">
          Am
        </text>
        <text x="365" y="187.4">
          Em
        </text>
        <text x="412.6" y="235">
          Bm
        </text>
        <text x="430" y="300">
          F♯m
        </text>
        <text x="412.6" y="365">
          C♯m
        </text>
        <text x="365" y="412.6">
          G♯m
        </text>
        <text x="300" y="430">
          E♭m
        </text>
        <text x="235" y="412.6">
          B♭m
        </text>
        <text x="187.4" y="365">
          Fm
        </text>
        <text x="170" y="300">
          Cm
        </text>
        <text x="187.4" y="235">
          Gm
        </text>
        <text x="235" y="187.4">
          Dm
        </text>
      </g>
    </svg>
  );
}

export default Circle5Icon;
