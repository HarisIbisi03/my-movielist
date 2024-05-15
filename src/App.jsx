"use client";
import React, { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import Movies from './components/Movies';
import OrderByAlphaButton from "./components/OrderByAlphaButton";
import OrderByGradeButton from "./components/OrderByGradeButton";
import './styles.css';


const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);

  const addMovie = (title, rating) => {
    const newMovieList = [...movieList, { title, rating }];
    setMovieList(newMovieList);
  };

  const deleteMovie = (index) => {
    const newMovieList = [...movieList];
    newMovieList.splice(index, 1);
    setMovieList(newMovieList);
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  let sortedMovies = [...movieList];
  if (sortCriteria === 'alpha') {
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortCriteria === 'grade') {
    sortedMovies.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <h1>Min filmlista</h1>
      <AddMovieForm addMovie={addMovie}/>
      <hr />
      <h2>Filmer</h2>
      <Movies movies={sortedMovies} onDelete={deleteMovie} />

      <div className="SortButtonsContainer">
        <OrderByAlphaButton className="Alpha" onClick={handleSort} />
        <OrderByGradeButton className="Grade" onClick={handleSort} />
      </div>
    </>
  );
};

export default App;
