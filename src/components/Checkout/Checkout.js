import React, { useEffect } from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div>
      <div className="payment-img-container">
        <img src="./images/payment.png" alt="payment" className="payment-img" />
      </div>
      <h1>Payment Done</h1>
    </div>
  );
}

export default Checkout;
