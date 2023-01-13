import React from "react";
import Help from "./Help";
import Screen from "./Screen";
import Seats from "./Seats";
import Total from "./Total";
import "./TicketBooking.css";
import AddToCartBtn from "./AddToCartBtn";

function TicketBooking() {

  return (
    <div className="main-container">
      <>
        <Help />
        <div className="container">
          <Screen />
          <Seats />
        </div>
        <Total />
        <AddToCartBtn />
      </>
    </div>
  );
}

export default TicketBooking;
