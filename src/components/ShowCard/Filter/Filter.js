import React from "react";
import { useEffect } from "react";
import "./Filter.css";

function Filter({ movieData, setFiltered, activeGenre, setActiveGenre }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movieData);
      return;
    }
    
    const filtered = movieData.filter((movie) =>
      movie.showTypeId === activeGenre
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All{" "}
      </button>
      <button
        className={activeGenre === 1 ? "active" : ""}
        onClick={() => setActiveGenre(1)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 2 ? "active" : ""}
        onClick={() => setActiveGenre(2)}
      >
        Plays
      </button>
      <button
        className={activeGenre === 3 ? "active" : ""}
        onClick={() => setActiveGenre(3)}
      >
        Movies
      </button>
    </div>
  );
}

export default Filter;
