import React, { useContext, useEffect, useState } from "react";
import MaterialTable from "material-table";
import "./cartSection.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { alpha } from "@material-ui/core/styles";
import seatContext from "../contex/seatContext";

function CartSection() {
  const columns = [
    { title: "ID", field: "tableData.id" ,render: (rowData) => rowData.tableData.id+1},
    { title: "Name", field: "movieName.name" },
    { title: "Seats", field: "seatsSelected" , render: (rowData) => JSON.stringify(rowData.seatsSelected) },
    { title: "Price", field: "movieName.price" },
    { title: "Total Price", field: "totalPrice" },
  ];
  const { checkoutData, deleteFromCart } = useContext(seatContext);
  const [item, setItem] = useState([]);
  const [billAmount, setBillAmount] = useState(0);
  const [emailAddress, setEmailAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setItem(checkoutData());
    checkoutPrice(checkoutData());
  }, []);

  const checkoutPrice = (item) => {
    let totalPrice = 0;
    item.forEach((currItem) => {
      totalPrice += currItem.totalPrice;
    });
    setBillAmount(totalPrice);
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Ticket Details", 20, 10);

    autoTable(doc, {
      theme:"grid",
      head:[["ID", "Name","Seats","Price","Total Price"]],
      body : item.map((row) => {
        return [row.tableData.id+1,row.movieName.name,row.seatsSelected,row.movieName.price,row.totalPrice]
      })
    })
    console.log(item);
    doc.save("ticket.pdf");
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (item.length >= 1) {
      if (emailAddress !== "") {
        axios
          .post("https://booking-app-server.onrender.com/api/bookingData", {
            item: item,
            emailAddress: emailAddress,
          })
          .then(() => {});
        downloadPdf();
        localStorage.clear();
        navigate("/checkout-page");
      } else {
        alert("Email Cannot be Empty");
      }
    } else {
      alert("Cart is Empty");
      navigate("/shows");
    }
  };

  return (
    <div className="cartContainer">
      <div className="cart_subContainer">
        <h1>Ticket Cart</h1>
        <h4>Book All Your Tickets here</h4>
      </div>
      <MaterialTable
        title="Tickets"
        data={item}
        columns={columns}
        options={{sorting:true,search:true}}
        editable={{
          onRowDelete: (row) =>
            new Promise((resolve, reject) => {
              const updatedData = [...item];
              updatedData.splice(row.tableData.id, 1);
              deleteFromCart(row.id);
              setItem(updatedData);
              setTimeout(() => resolve(), 100);
            }),
        }}
      />
      <form>
        <div className="email">
          <h3>Email address :</h3>
          <input
            type="email"
            required
            placeholder="example@gmail.com"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          />
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>{billAmount}</span>
          </h3>
          <button onClick={handleClick}>Checkout</button>
        </div>
      </form>
    </div>
  );
}

export default CartSection;
