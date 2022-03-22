import React from "react";
import SearchQuery from "./SearchQuery";
import "../styles/container.css";

export default function SearchContainer({ filteredResults, addBreed }) {
  return (
    <div className="container-fluid bg-transparent page my-1 p-1" id="page">
      <SearchQuery filteredResults={filteredResults} addBreed={addBreed} />
    </div>
  );
}
