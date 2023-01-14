import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import seatContext from "../contex/seatContext";
import Button from '@mui/material/Button';


function AddToCartBtn() {
  const { finalCart } = useContext(seatContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if(JSON.parse(localStorage.getItem('seatsId')).length ===  0){
      alert("Please Select at least one Seat")
    } else {
      finalCart();
      navigate("/cart");
    }
  };

  return (
    <div className="container">
      <Button
      variant="contained"
        color="error"
        onClick={handleClick}
      >
        Add To Cart
      </Button>
    </div>
  );
}

export default AddToCartBtn;
