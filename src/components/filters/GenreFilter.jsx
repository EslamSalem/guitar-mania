function GenreFilter({ setFilter }) {
  function updateGenreFilter(e) {
    if (e.target.checked) {
      setFilter((prev) => ({
        ...prev,
        genre: [...prev.genre, e.target.value],
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        genre: prev.genre.filter((item) => item !== e.target.value),
      }));
    }
  }

  return (
    <>
      <h3 className="filter-category">Genre</h3>
      <div id="genre-filter" className="filter-checkbox">
        <label>
          <input
            type="checkbox"
            value="Metal"
            onChange={(e) => updateGenreFilter(e)}
          />
          <span>Metal</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Rock"
            onChange={(e) => updateGenreFilter(e)}
          />
          <span>Rock</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Blues"
            onChange={(e) => updateGenreFilter(e)}
          />
          <span>Blues</span>
        </label>
      </div>
    </>
  );
}

export default GenreFilter;
