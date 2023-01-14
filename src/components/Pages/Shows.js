import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ShowCard from "../ShowCard/ShowCard";
import Filter from "../ShowCard/Filter/Filter";
import { motion, AnimatePresence } from "framer-motion";
import seatContext from "../ticketBook/contex/seatContext";
import MaterialCard from "../ShowCard/MaterialCard";

function Shows() {
  const { movies } = useContext(seatContext);

  const [movieData, setMovieData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    setMovieData(movies);
    setFiltered(movies);
    localStorage.removeItem('seatsId');
  }, [movies]);

  return (
    <div className="show">
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
                <MaterialCard key={index} movie={movie}/>
                {/* <ShowCard key={index} movie={movie}/> */}
              </div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Shows;
