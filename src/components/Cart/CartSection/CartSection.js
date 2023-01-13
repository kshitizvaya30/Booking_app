import React, { useContext, useEffect, useState } from "react";
import MaterialTable from "material-table";
import "./cartSection.css";
import seatContext from "../../ticketBook/contex/seatContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function CartSection() {
  const columns = [
    { title: "ID", field: "" },
    { title: "Name", field: "movieName.index" },
    { title: "Seats", field: "seatsSelected" },
    { title: "Price", field: "movieName.Price" },
    { title: "Total Price", field: "totalPrice" },
  ];
  const { checkoutData } = useContext(seatContext);
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
      columns: columns.map((col) => ({ ...col, datakey: col.field })),
      body: item,
    });
    doc.save("ticket.pdf");
  };

  const handleClick = () => {
    if (item.length >= 1) {
      if (emailAddress !== "") {
        console.log("clicked");
        axios
          .post("http://localhost:3001/api/bookingData", {
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
      navigate("/services");
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
        editable={{
          isDeletable: (row) => row.id % 2 === 0,
          onRowDelete: () => (newdata) => null,
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
