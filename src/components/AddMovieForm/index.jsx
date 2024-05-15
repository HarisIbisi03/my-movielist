import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.trim() === "" || rating === "0" || rating.trim() === "") {
            // Popup med felmeddelande
            alert("Du måste ange både en titel och ett betyg");
            return;
        }
        addMovie(title, rating);
        setTitle('');
        setRating('');
    };

    return (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Lägg till en film</legend>
    
            <label htmlFor="title-field" className="form-label">Titel:</label>
            <input
              type="text"
              id="title-field"
              className="form-control mb-3"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
    
            <label htmlFor="rating-field" className="form-label">Betyg:</label>
            <select
              id="rating-field"
              className="form-control mb-3"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            >
              <option value="0">Välj betyg här...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              
            </select>
    
            <input type="submit" className="btn btn-success" value="Spara film" />
            
          </fieldset>
        </form>
      );
    };
    
    export default AddMovieForm;