function SortingIcon({ sorting }) {
  if (sorting === "asc")
    return (
      <svg
        fill="#000000"
        width="20px"
        height="20px"
        viewBox="-96 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z" />
      </svg>
    );
  else if (sorting === "dsc")
    return (
      <svg
        fill="#000000"
        width="20px"
        height="20px"
        viewBox="-96 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" />
      </svg>
    );
  else
    return (
      <svg
        fill="#000000"
        width="20px"
        height="20px"
        viewBox="-96 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" />
      </svg>
    );
}

export default SortingIcon;
