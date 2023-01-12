import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ShowCard from "../ShowCard/ShowCard";
import Filter from "../ShowCard/Filter/Filter";
import { motion, AnimatePresence } from "framer-motion";
import seatContext from "../ticketBook/contex/seatContext";

function Services() {
  const { movies } = useContext(seatContext);

  const [movieData, setMovieData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    setMovieData(movies);
    setFiltered(movies);
  }, [movies]);

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
          {filtered.map((movie,index) => {
            return (
              <div>
                <ShowCard key={index} movie={movie}/>
              </div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Services;
