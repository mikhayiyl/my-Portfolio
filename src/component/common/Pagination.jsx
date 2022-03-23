import React from "react";
import _ from "lodash";
const Pagination = ({ pageItems, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(pageItems / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? "page-item active actives" : "page-item"
            }
          >
            <button onClick={() => onPageChange(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
