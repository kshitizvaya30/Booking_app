import React from "react";
import SelectList from "./SelectList";
import Help from "./Help";
import Screen from "./Screen";
import Seats from "./Seats";
import Total from "./Total";
import './TicketBooking.css'

function TicketBooking() {
  return (
    <div className="main-container">
      <>
        <SelectList />
        <Help />
        <div className="container">
          <Screen />
          <Seats />
        </div>
        <Total />
      </>
    </div>
  );
}

export default TicketBooking;
