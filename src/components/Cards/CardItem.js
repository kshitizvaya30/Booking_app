import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function CardItem(props) {
  return (
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={props.src}
          alt={props.name}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.timings}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link className="cards__item__link" to={props.path} >
        <Button size="small" color="primary">
          Book Tickets
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardItem;
