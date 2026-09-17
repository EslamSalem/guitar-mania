function BrandFilter({ setFilter }) {
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
    <>
      <h3 className="filter-category">Guitar Brand</h3>
      <div id="brand-filter" className="filter-checkbox">
        <label>
          <input
            type="checkbox"
            value="Schecter"
            onChange={(e) => updateBrandFilter(e)}
          />
          <span>Schecter</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Gibson"
            onChange={(e) => updateBrandFilter(e)}
          />
          <span>Gibson</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="ESP"
            onChange={(e) => updateBrandFilter(e)}
          />
          <span>ESP</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Fender"
            onChange={(e) => updateBrandFilter(e)}
          />
          <span>Fender</span>
        </label>
      </div>
    </>
  );
}

export default BrandFilter;
