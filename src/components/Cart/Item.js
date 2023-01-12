import React, { useEffect, useState } from "react";

function Item({ item }) {
  const [val, setVal] = useState({});
  const [seatData, setSeatData] = useState({});

  useEffect(() => {
    setVal(item.movieName);
    setSeatData(item.seatsSelected);
  }, []);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src="./images/img-1.jpg" alt="movie1" />
        </div>
        <div className="title">
          <h2>{val.index}</h2>
          <p>Show Timings</p>
        </div>
        <div className="price">
          <h3>{item.totalPrice}</h3>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Item;
