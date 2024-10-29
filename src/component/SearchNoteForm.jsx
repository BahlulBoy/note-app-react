import PropTypes from "prop-types";

function SearchNoteForm({
  search,
  onSearchChangeHandler,
  onSearchSubmitEventHandler,
}) {
  return (
    <form action="" id="searchForm" onSubmit={onSearchSubmitEventHandler}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={onSearchChangeHandler}
        placeholder="title notes"
      />
    </form>
  );
}

SearchNoteForm.propTypes = {
  search: PropTypes.string,
  onSearchChangeHandler: PropTypes.func,
  onSearchSubmitEventHandler: PropTypes.func,
};

export default SearchNoteForm;
