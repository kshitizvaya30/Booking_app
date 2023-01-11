import { ADD_SEAT, REMOVE_SEAT, GET_DATA } from './types';

const seatReducer = (state, action) => {
  switch (action.type) {
    case ADD_SEAT:
      let updateSeatsId = JSON.parse(localStorage.getItem('seatsId'));
      if (updateSeatsId.length > 0) {
        updateSeatsId = [...state.seatsId, action.payload];
      } else {
        updateSeatsId = [action.payload];
      }
      localStorage.setItem('seatsId', JSON.stringify(updateSeatsId));
      return {
        ...state,
        seatsId: [...new Set(updateSeatsId)],
      };


    case REMOVE_SEAT:
      let updatedseatsId = JSON.parse(localStorage.getItem('seatsId'));
      const filterdSeatsId =
        updatedseatsId !== null
          ? updatedseatsId.filter((item) => item !== action.payload)
          : [];
      localStorage.setItem('seatsId', JSON.stringify(filterdSeatsId));
      return {
        ...state,
        seatsId: [...new Set(filterdSeatsId)],
      };

    case GET_DATA:
      let getSeatsId = JSON.parse(localStorage.getItem('seatsId'));
      let getSelectedMovie;
      if (getSelectedMovie === null) {
        getSelectedMovie = {
          index: 0,
          price: state.movies[0].price,
        };
      } else {
        getSelectedMovie = JSON.parse(localStorage.getItem('selectedMovie'));
      }
      if (getSeatsId === null) {
        getSeatsId = [];
        localStorage.setItem('seatsId', JSON.stringify([]));
      } else {
        getSeatsId = JSON.parse(localStorage.getItem('seatsId'));
      }

      return {
        ...state,
        selectedMovie: getSelectedMovie,
        seatsId: getSeatsId,
      };

    default:
      return state;
  }
};

export default seatReducer;
