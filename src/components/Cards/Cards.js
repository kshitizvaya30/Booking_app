import React, { useContext, useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import axios from "axios";
import { Grid } from "@material-ui/core";

function Cards() {
  const [trendingShows, setTrendingShows] = useState([{}]);

  useEffect(() => {
    axios.get("https://booking-app-server.onrender.com/api/getTrendingShows").then((response) => {
      // console.log(typeof(response.data));
      // console.log(response.data)
      setTrendingShows(response.data);
    });
  }, []);

  return (
    <div className="cards">
      <h1>Check out these TRENDING Shows!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <Grid container spacing={8}>
            {trendingShows.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <CardItem
                    src={item.img_url}
                    name={item.name}
                    timings={item.timings}
                    path="/shows"
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Cards;
