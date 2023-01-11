import React, { useContext, useCallback } from 'react';
import Seat from './Seat';
import SeatContext from '../contex/seatContext';
import './TicketBooking.css';


const Seats = () => {
  const seats = [];
  const row = 6;
  const column = 8;
  let { addSeat, removeSeat } = useContext(SeatContext);
  const getSeatsId = JSON.parse(localStorage.getItem('seatsId'));

  const onclickHandle = useCallback(
    (e) => {
      if (
        e.target.classList.contains('selected') &&
        !e.target.classList.contains('occupeid')
      ) {
        e.target.classList.remove('selected');
        removeSeat(e.target.dataset.id);
      } else if (
        !e.target.classList.contains('selected') &&
        !e.target.classList.contains('occupeid')
      ) {
        e.target.classList.add('selected');
        addSeat(e.target.dataset.id);
      }
    },
    [addSeat, removeSeat]
  );

  const occupeidfunc = (i, j) => {
    if (i === 1 && j === 2) {
      return true;
    } else if (i === 1 && j === 3) {
      return true;
    } else if (i === 2 && j === 0) {
      return true;
    } else if (i === 2 && j === 1) {
      return true;
    } else if (i === 3 && j === 1) {
      return true;
    } else if (i === 3 && j === 2) {
      return true;
    } else if (i === 3 && j === 3) {
      return true;
    }

    return false;
  };

  const selectedfunc = (i, j) => {
    if (getSeatsId) {
      for (let item of getSeatsId) {
        if (+item === i * column + j + 1) {
          return true;
        }
      }
    }
    return false;
  };

  for (let i = 0; i < row; i++) {
    seats[i] = [];
    for (let j = 0; j < column; j++) {
      seats[i][j] = (
        <Seat
          id={i * column + j + 1}
          key={i * column + j + 1}
          occupeid={occupeidfunc(i, j)}
          selected={selectedfunc(i, j)}
          onclick={onclickHandle}
        />
      );
    }
  }

  return (
    <>
      {seats.map((row, i) => (
        <div className='row' key={i}>
          {row.map((column, j) => column)}
        </div>
      ))}
    </>
  );
};

export default Seats;
