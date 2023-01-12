import React, { useContext, useEffect } from "react";
import SeatContext from "../contex/seatContext";
import "./TicketBooking.css";

const SelectList = () => {
  const { movies, saveMovie, getData, selectedMovie } = useContext(SeatContext);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const savedMovie = {
      index: e.target.selectedIndex,
      price: movies[e.target.selectedIndex].price,
    };
    saveMovie(savedMovie);
    getData();
  };

  let selectValue;
  if (selectedMovie !== null && movies[selectedMovie.index] !== undefined) {
    selectValue = movies[selectedMovie.index].name;
  } else {
    selectValue = movies[0].name;
  }

  return (
    <div className="movie-container">
      <label>Pick a movie: </label>
      <select value={selectValue} onChange={handleChange}>
        {movies.map((movie,index) => (
          <option key={index} value={movie.name} data-price={movie.price}>
            {movie.name} (${movie.price})
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectList;
