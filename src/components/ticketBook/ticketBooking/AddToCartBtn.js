import React, { useContext } from "react";
import { Button } from "../../Buttons/Button";
import seatContext from "../contex/seatContext";

function AddToCartBtn() {
  const { finalCart } = useContext(seatContext);

  const handleClick = () => {
    finalCart();
  };

  return (
    <div className="container">
      <Button
        buttonSize="btn--large"
        buttonStyle="btn--outline"
        onClick={handleClick}
        link="/cart"
      >
        Add To Cart
      </Button>
    </div>
  );
}

export default AddToCartBtn;
