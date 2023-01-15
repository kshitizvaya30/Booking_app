import React, { useState } from "react";
import Table from "./Table";
import "./History.css";
import axios from "axios";
import { Button } from "@material-ui/core";

function History() {
  const [emailAddress, setEmailAddress] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get("https://booking-app-server.onrender.com/api/history", {
        params: {
          email: emailAddress,
        },
      })
      .then((response) => {
        console.log(response.data)
        if (response.data.length === 0) {
          alert("No Tickets Booked on this Email");
          setData([]);
        } else {
          setData(response.data);
        }
      });
  };

  return (
    <div className="mainContainer">
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
        <div className="btn_container">
          <Button
            className="btnHistory"
            color="primary"
            variant="contained"
            size="large"
            onClick={handleClick}
          >
            Check History
          </Button>
        </div>
      </form>
      <Table data={data} email={emailAddress} />
    </div>
  );
}

export default History;
