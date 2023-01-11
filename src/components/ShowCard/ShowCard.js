import React, { useContext, useEffect } from "react";
import "./ShowCard.css";
import { motion } from "framer-motion";
import SeatContext from "../ticketBook/contex/seatContext";
import { Button } from "../Buttons/Button";

function ShowCard({ movie }) {
  const { saveMovie, getData } = useContext(SeatContext);
  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    console.log("clicked");
    const savedMovie = {
      index: 3,
      price: 10,
    };
    saveMovie(savedMovie);
    getData();
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.id}
      />
      <Button buttonSize="btn--small" buttonStyle="btn--secondary" onClick={handleClick} link="/ticket-booking">Book Tickets</Button>
    </motion.div>
  );
}

export default ShowCard;
