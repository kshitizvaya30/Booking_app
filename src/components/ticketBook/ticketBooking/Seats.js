import React, { useContext, useCallback, useEffect, useState } from "react";
import Seat from "./Seat";
import SeatContext from "../../contex/seatContext";
import "./TicketBooking.css";
import axios from "axios";

const Seats = () => {
  const seats = [];
  const row = 10;
  const column = 15;
  let { addSeat, removeSeat } = useContext(SeatContext);
  const getSeatsId = JSON.parse(localStorage.getItem("seatsId"));
  const [soldSeats, setSoldSeats] = useState([""]);

  useEffect(() => {
    axios.get("https://booking-app-server.onrender.com/api/soldSeats", {
      params: {
        showId: JSON.parse(localStorage.getItem("selectedMovie")),
      },
    }).then((response) => {
      setSoldSeats(response.data);
    });
  }, []);

  const onclickHandle = useCallback(
    (e) => {
      if (
        e.target.classList.contains("selected") &&
        !e.target.classList.contains("occupied")
      ) {
        e.target.classList.remove("selected");
        removeSeat(e.target.dataset.id);
      } else if (
        !e.target.classList.contains("selected") &&
        !e.target.classList.contains("occupied")
      ) {
        e.target.classList.add("selected");
        addSeat(e.target.dataset.id);
      }
    },
    [addSeat, removeSeat]
  );

  const occupiedfunc = (i, j) => {
    const val = String.fromCharCode(i+65)+"-"+ j;
    if(soldSeats.includes(val.toString())){
      return true;
      
    }
    return false;
  };

  const selectedfunc = (i, j) => {
    if (getSeatsId) {
      for (let i = 0; i < getSeatsId.length; i++) {
        if (getSeatsId[i] === String.fromCharCode(i+65)+"-"+ j) {
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
          id={String.fromCharCode(i+65)+"-"+ j}
          key={String.fromCharCode(i+65)+"-"+ j}
          occupied={occupiedfunc(i, j)}
          selected={selectedfunc(i, j)}
          onclick={onclickHandle}
        />
      );
    }
  }

  return (
    <>
      {seats.map((row, i) => (
        <div className="row" key={i}>
          {row.map((column, j) => column)}
        </div>
      ))}
    </>
  );
};

export default Seats;
