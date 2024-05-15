import React from "react";
import Movie from "../Movie";

const Movies = ({ movies, onDelete }) => {
    return (
      <ul>
        {movies.map((movie, index) => (
          <Movie key={index} title={movie.title} rating={movie.rating} onDelete={() => onDelete(index)} />
        ))}
      </ul>
    );
};
  
export default Movies;