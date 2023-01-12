import React, { useEffect, useReducer, useState } from "react";
import SeatContext from "./seatContext";
import seatReducer from "./seatReducer";
import Axios from "axios";

import { ADD_SEAT, REMOVE_SEAT, GET_DATA } from "./types";

const SeatState = ({ children }) => {
  const initialState = {
    movies: [""],
    seatsId: [""],
    selectedMovie: {},
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getShowData").then((response) => {
      // console.log(response.data);
      initialState.movies = response.data;
    });
  }, []);

  const [state, dispatch] = useReducer(seatReducer, initialState);

  const addSeat = (id) => {
    dispatch({ type: ADD_SEAT, payload: id });
  };
  const removeSeat = (id) => {
    dispatch({ type: REMOVE_SEAT, payload: id });
  };

  const saveMovie = (movie) => {
    localStorage.setItem("selectedMovie", JSON.stringify(movie));
  };

  const getData = () => {
    dispatch({ type: GET_DATA });
  };

  const finalCart = () => {
    var finalData = JSON.parse(localStorage.getItem("checkout") || "[]");
    // console.log(JSON.parse(localStorage.getItem("selectedMovie")).price);
    // console.log(JSON.parse(localStorage.getItem("seatsId")).length);
    let totalPrice = JSON.parse(localStorage.getItem("selectedMovie")).price * JSON.parse(localStorage.getItem("seatsId")).length;
    const checkoutObj = {
      movieName: JSON.parse(localStorage.getItem("selectedMovie")),
      seatsSelected: JSON.parse(localStorage.getItem("seatsId")),
      totalPrice: totalPrice
    };
    finalData.push(checkoutObj);
    console.log(checkoutObj);
    localStorage.setItem("checkout", JSON.stringify(finalData));
    localStorage.removeItem("selectedMovie");
    localStorage.removeItem("seatsId");
  };

  const checkoutData = () => {
    const data = JSON.parse(localStorage.getItem("checkout") || "[]");
    return data;
  };

  return (
    <SeatContext.Provider
      value={{
        movies: state.movies,
        selectedMovie: state.selectedMovie,
        seatsId: state.seatsId,
        addSeat,
        removeSeat,
        saveMovie,
        getData,
        finalCart,
        checkoutData,
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};

export default SeatState;
