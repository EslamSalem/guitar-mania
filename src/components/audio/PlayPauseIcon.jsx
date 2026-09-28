function PlayPauseIcon({ isPlaying }) {
  if (isPlaying) {
    return (
      <svg
        width="50px"
        height="50px"
        viewBox="-1 0 8 8"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-67.000000, -3765.000000)"
            fill="currentColor"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M11,3613 L13,3613 L13,3605 L11,3605 L11,3613 Z M15,3613 L17,3613 L17,3605 L15,3605 L15,3613 Z"
                id="pause-[#1010]"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        width="50px"
        height="50px"
        viewBox="-0.5 0 8 8"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-427.000000, -3765.000000)"
            fill="currentColor"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <polygon
                id="play-[#1001]"
                points="371 3605 371 3613 378 3609"
              ></polygon>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default PlayPauseIcon;
