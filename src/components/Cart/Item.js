import React, { useEffect, useState } from "react";

function Item({ item }) {
  const [val, setVal] = useState({});

  useEffect(() => {
    let x = JSON.parse(item.movieName);
    setVal(x);
    console.log(x.price);
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
          <h3>{val.price}</h3>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Item;
