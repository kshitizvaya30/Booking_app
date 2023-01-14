import React, { useState } from "react";
import Table from "./Table";
import "./History.css";
import axios from "axios";
import Button from '@mui/material/Button';


function History() {
  const [emailAddress, setEmailAddress] = useState("");
  const [data,setData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    axios.get("http://localhost:3001/api/history", {
      params: {
        email: emailAddress,
      },
    }).then((response) => {
      setData(response.data);
    });
  }


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
          <Button className="btnHistory" color="primary" variant="contained" size="large" onClick={handleClick}>Check History</Button>
        </div>
      </form>
      <Table data={data} email={emailAddress}/>
    </div>
  );
}

export default History;
