import SortingIcon from "./SortingIcon";

function SortingFilter({ filter, setFilter }) {
  function updateSorting() {
    if (filter.sortByName === "none")
      setFilter((prev) => ({ ...prev, sortByName: "asc" }));
    else if (filter.sortByName === "asc")
      setFilter((prev) => ({ ...prev, sortByName: "dsc" }));
    else if (filter.sortByName === "dsc")
      setFilter((prev) => ({ ...prev, sortByName: "none" }));
  }

  return (
    <>
      <h3 className="filter-category">Sort By</h3>
      <div id="sorting-filter">
        <label>Name</label>{" "}
        <button onClick={updateSorting}>
          <SortingIcon sorting={filter.sortByName} />
        </button>
      </div>
    </>
  );
}

export default SortingFilter;
