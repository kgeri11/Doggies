import React from "react";

export default function Search({ searchBreeds }) {
  return (
    <div className="row justify-content-center align-items-center mb-5">
      <form className="d-flex col-9  col-md-8 col-lg-5 ">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => searchBreeds(e.target.value)}
        />
      </form>
    </div>
  );
}


