import React from "react";

const Select = ({ options, onChange }) => {
  return (
    <div className="form-groups">
      <select onChange={onChange} className="form-control">
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
