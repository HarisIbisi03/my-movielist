import React from "react";

const Movie = ({ title, rating, onDelete }) => {
    let stars = [];
    for (var i = 0; i < rating; i++) {
      stars.push(<img key={i} src="/images/star.png" alt="star" />);
  }

  return (
    <li data-grade={rating} data-title={title}>
    {title} {stars}
    <img src="/images/delete.png" alt="Delete movie" className="delete-movie-icon" onClick={onDelete} />
    </li>
  );
};

export default Movie;