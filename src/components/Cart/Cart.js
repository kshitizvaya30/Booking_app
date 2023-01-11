import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import Item from "./Item";
import seatContext from "../ticketBook/contex/seatContext";

function Cart() {
    const { checkoutData } = useContext(seatContext);
    const[item,setItem] = useState([]);

    useEffect(() => {
        setItem(checkoutData());
        // console.log(checkoutData())
    }, [])
    
  return (
    <div>
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
                {
                    item.map((currItem,index) => {
                        return <Item item={currItem} key={index}/>
                    })
                } 
            </Scrollbars>
          </div>
        </div>
        <div className="card-total"><h3>Cart Total : <span>20000</span></h3></div>
        <button>Checkout</button>
      </section>
    </div>
  );
}

export default Cart;
