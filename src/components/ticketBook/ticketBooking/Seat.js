import React from 'react';
import './TicketBooking.css'


const Seat = ({ id, occupied, selected, onclick }) => {
  const classes = ['seat'];
  if (occupied) {
    classes.push('occupied');
  } else if (selected) {
    classes.push('selected');
  }

  return (
    <div className={classes.join(' ')} data-id={id} onClick={onclick}></div>
  );
};

export default Seat;
