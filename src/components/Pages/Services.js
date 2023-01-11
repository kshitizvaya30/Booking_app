import React from "react";
import { useState, useEffect } from "react";
import ShowCard from "../ShowCard/ShowCard";
import Filter from "../ShowCard/Filter/Filter";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  const [movieData, setMovieData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);


  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3fa51e31e7836db85d22f7b99d59ab4d&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovieData(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="service">
      <Filter
        movieData={movieData}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return (
              <div>
                <ShowCard key={movieData.id} movie={movie}/>
              </div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Services;
