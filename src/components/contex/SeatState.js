import React, { useEffect, useReducer, useState } from "react";
import SeatContext from "./seatContext";
import seatReducer from "./seatReducer";
import axios from "axios";

import { ADD_SEAT, REMOVE_SEAT, GET_DATA, DELETE_DATA } from "./types";

const SeatState = ({ children }) => {
  const initialState = {
    id: 0,
    movies: [""],
    seatsId: [""],
    selectedMovie: {},
  };

  useEffect(() => {
    axios.get("https://booking-app-server.onrender.com/api/getShowData").then((response) => {
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

  const deleteFromCart = (id) => {
    dispatch({ type: DELETE_DATA, payload: id });
  }


  const saveMovie = (movie) => {
    localStorage.setItem("selectedMovie", JSON.stringify(movie));
    let val = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem("id", val);
  };

  const getData = () => {
    dispatch({ type: GET_DATA });
  };

  const finalCart = () => {
    var finalData = JSON.parse(localStorage.getItem("checkout") || "[]");
    let totalPrice = JSON.parse(localStorage.getItem("selectedMovie")).price * JSON.parse(localStorage.getItem("seatsId")).length;
    const checkoutObj = {
      id:JSON.parse(localStorage.getItem("id")),
      movieName: JSON.parse(localStorage.getItem("selectedMovie")),
      seatsSelected: JSON.parse(localStorage.getItem("seatsId")),
      totalPrice: totalPrice
    };
    finalData.push(checkoutObj);
    localStorage.setItem("checkout", JSON.stringify(finalData));
    localStorage.removeItem("selectedMovie");
    localStorage.removeItem("seatsId");
    localStorage.removeItem("id");
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
        deleteFromCart,
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};

export default SeatState;
