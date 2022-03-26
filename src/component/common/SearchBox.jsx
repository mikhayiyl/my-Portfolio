import React from "react";
const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      id="query"
      value={value}
      placeholder="  Searching...."
      className="form-control m-3 search-bar"
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
