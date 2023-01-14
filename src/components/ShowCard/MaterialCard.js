import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import seatContext from "../ticketBook/contex/seatContext";
import { Link } from "react-router-dom";
import { easeIn, motion } from "framer-motion";

function MaterialCard({ movie }) {
  const { saveMovie, getData } = useContext(seatContext);
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
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={movie.img_url}
            alt={movie.id}
          />
          <CardContent>
            <Typography gutterBottom variant="h8" component="div">
              {movie.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/ticket-booking" style={{ textDecoration: "none" }}>
            <Button size="small" color="primary" onClick={handleClick}>
              Book Tickets
            </Button>
          </Link>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default MaterialCard;
