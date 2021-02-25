import React from "react";
import BookContext from "../utils/bookContext";

function SearchForm() {
  return (
    // Use consumer to capture state.search and form handler functions
    <BookContext.Consumer>
      {({search, handleInputChange, handleFormSubmit}) => (
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={handleInputChange}
              value={search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search For a Book"
              id="search"
            />
            <br />
            <button onClick={handleFormSubmit} className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      )}
    </BookContext.Consumer>
  );
}

export default SearchForm;
