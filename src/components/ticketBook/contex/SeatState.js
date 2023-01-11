import React, { useReducer } from 'react';
import SeatContext from './seatContext';
import seatReducer from './seatReducer';
import { ADD_SEAT, REMOVE_SEAT, GET_DATA } from './types';

const SeatState = ({ children }) => {
  const initialState = {
    movies: [
      { id: 0, name: 'Interstaller', price: 10 },
      { id: 1, name: 'Scare Face', price: 15 },
      { id: 2, name: 'Good Fellas', price: 8 },
      { id: 3, name: 'God Father', price: 20 },
    ],
    seatsId: [],

    selectedMovie: {},
  };

  const [state, dispatch] = useReducer(seatReducer, initialState);

  const addSeat = (id) => {
    dispatch({ type: ADD_SEAT, payload: id });
  };
  const removeSeat = (id) => {
    dispatch({ type: REMOVE_SEAT, payload: id });
  };

  const saveMovie = (movie) => {
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
  };

  const getData = () => {
    dispatch({ type: GET_DATA });
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
      }}>
      {children}
    </SeatContext.Provider>
  );
};

export default SeatState;
