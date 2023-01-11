import React from 'react';
import './TicketBooking.css'


const Seat = ({ id, occupeid, selected, onclick }) => {
  const classes = ['seat'];
  if (occupeid) {
    classes.push('occupeid');
  } else if (selected) {
    classes.push('selected');
  }

  return (
    <div className={classes.join(' ')} data-id={id} onClick={onclick}></div>
  );
};

export default Seat;
