import React from "react";

const ListGroup = ({ genres, selectedItem, onSelect }) => {
  return (
    <nav>
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            onClick={() => onSelect(genre)}
            key={genre._id}
            className={
              genre === selectedItem
                ? "list-group-item active actives"
                : "list-group-item"
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ListGroup;
