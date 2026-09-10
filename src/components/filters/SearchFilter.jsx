function SearchFilter({ filter, setFilter }) {
  return (
    <>
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
    </>
  );
}

export default SearchFilter;
