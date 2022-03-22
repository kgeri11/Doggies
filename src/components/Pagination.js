import React from "react";

export default function Pagination({ pagecount, setPageCount }) {
  return (
    <nav aria-label="...">
      <ul class="pagination pagination-lg justify-content-center mt-5">
        <li onClick={() => setPageCount(pagecount--)} class="page-item">
          <span  class="page-link">Previous</span>
        </li>
        <li onClick={() => setPageCount(pagecount--)} class="page-item">
          <a class="page-link">{pagecount > 0  ? pagecount + 1 : 1}</a>
        </li>
        <li  class="page-item">
          <a class="page-link">{pagecount+2}</a>
        </li>
        <li onClick={() => setPageCount(pagecount++)} class="page-item">
          <a class="page-link">{pagecount + 3}</a>
        </li>
        <li onClick={() => setPageCount(pagecount != 16  ? pagecount++ : null)} class="page-item">
          <a class="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
}
