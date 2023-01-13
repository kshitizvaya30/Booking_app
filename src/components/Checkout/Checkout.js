import React, { useEffect } from "react";
import "./Checkout.css";

function Checkout() {
  useEffect(() => {
    console.log("checkout");
  });
  return (
    <div>
      <div className="payment-img-container">
        <img src="./images/payment.png" alt="payment" className="payment-img" />
      </div>
      <h1>Payment Done</h1>
      <div className="downloadBtn">
        <button className="btn-primary">Download Ticket</button>
      </div>
    </div>
  );
}

export default Checkout;
