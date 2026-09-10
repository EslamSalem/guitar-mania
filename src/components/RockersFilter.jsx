import SearchFilter from "./filters/SearchFilter";
import GenreFilter from "./filters/GenreFilter";
import BrandFilter from "./filters/BrandFilter";
import "../styles/Rockers-Filter.css";

function RockersFilter({ filter, setFilter }) {
  return (
    <div id="rockers-filter">
      <h2 id="filter-title">Filters</h2>
      <SearchFilter filter={filter} setFilter={setFilter} />
      <GenreFilter setFilter={setFilter} />
      <BrandFilter setFilter={setFilter} />
    </div>
  );
}

export default RockersFilter;
