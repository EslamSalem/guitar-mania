import "../styles/Rockers-Filter.css";

function RockersFilter({ filter, setFilter }) {
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

  function updateBrandFilter(e) {
    if (e.target.checked) {
      setFilter((prev) => ({
        ...prev,
        brand: [...prev.brand, e.target.value],
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        brand: prev.brand.filter((item) => item !== e.target.value),
      }));
    }
  }

  return (
    <div id="rockers-filter">
      <h2 id="filter-title">Filters</h2>

      <h3 className="filter-category">Name</h3>
      <input
        id="search-filter"
        type="text"
        placeholder="Guitarist's Name..."
        value={filter.name}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, name: e.target.value }))
        }
      />

      <h3 className="filter-category">Genre</h3>
      <div id="genre-filter">
        <label>
          <input
            type="checkbox"
            value="Metal"
            onChange={(e) => updateGenreFilter(e)}
          />
          Metal
        </label>
        <label>
          <input
            type="checkbox"
            value="Rock"
            onChange={(e) => updateGenreFilter(e)}
          />
          Rock
        </label>
        <label>
          <input
            type="checkbox"
            value="Blues"
            onChange={(e) => updateGenreFilter(e)}
          />
          Blues
        </label>
      </div>

      <h3 className="filter-category">Guitar Brand</h3>
      <div id="brand-filter">
        <label>
          <input
            type="checkbox"
            value="Schecter"
            onChange={(e) => updateBrandFilter(e)}
          />
          Schecter
        </label>
        <label>
          <input
            type="checkbox"
            value="Gibson"
            onChange={(e) => updateBrandFilter(e)}
          />
          Gibson
        </label>
        <label>
          <input
            type="checkbox"
            value="Ibanez"
            onChange={(e) => updateBrandFilter(e)}
          />
          Ibanez
        </label>
      </div>
    </div>
  );
}

export default RockersFilter;
