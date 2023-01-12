import React, { useContext, useEffect, useRef, useState } from "react";
import "./Cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import Item from "./Item";
import seatContext from "../ticketBook/contex/seatContext";
import DownloadTicket from "../downloadTicket/DownloadTicket";
import { useReactToPrint } from "react-to-print";

function Cart() {
  const { checkoutData } = useContext(seatContext);
  const [item, setItem] = useState([]);
  const [billAmount, setBillAmount] = useState(0);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "show-tickets",
    onAfterPrint: () => alert("Tickets Downloaded"),
  });

  useEffect(() => {
    setItem(checkoutData());
    checkoutPrice(checkoutData());
    // console.log(checkoutData())
  }, []);

  const checkoutPrice = (item) => {
    let totalPrice = 0;
    item.forEach((currItem) => {
      totalPrice += currItem.totalPrice;
    });
    setBillAmount(totalPrice);
  };

  return (
    <div className="cart-container">
      <header>
        <div className="continue-shopping">
          <img
            src="./images/cart/arrow.png"
            alt="arrow"
            className="arrow-icon"
          />
          <h3>continue booking</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart/cart.png" alt="cart" />
          <p>3</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">3</span> items in your
          cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((currItem, index) => {
                return <Item item={currItem} key={index} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>{billAmount}</span>
          </h3>
          <button>Checkout</button>
          <div></div>
          <button onClick={handlePrint}>DownloadTicket</button>
        </div>
        <div ref={componentRef}>
          {/* <DownloadTicket item={item} /> */}
        </div>
      </section>
    </div>
  );
}

export default Cart;
