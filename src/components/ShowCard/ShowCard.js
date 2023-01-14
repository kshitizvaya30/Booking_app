import React, { useContext, useEffect } from "react";
import "./ShowCard.css";
import { motion } from "framer-motion";
import SeatContext from "../ticketBook/contex/seatContext";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


function ShowCard({ movie }) {
  const { saveMovie, getData } = useContext(SeatContext);
  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    const savedMovie = {
      index: movie.id,
      name: movie.name,
      price: movie.price,
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
    >
      <h2>{movie.name}</h2>
      <img src={movie.img_url} alt={movie.id} />
      <Link to="/ticket-booking" className="btnLink">
        <Button color="primary" variant="contained" onClick={handleClick}>Book Tickets</Button>
      </Link>
    </motion.div>
  );
}

export default ShowCard;
