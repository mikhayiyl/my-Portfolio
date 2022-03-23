import React from "react";
const SearchBox = ({ value, onChange }) => {
  return (
    <input
      style={{ width: "450px" }}
      type="text"
      id="query"
      value={value}
      placeholder="  Searching...."
      className="form-control m-3"
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
