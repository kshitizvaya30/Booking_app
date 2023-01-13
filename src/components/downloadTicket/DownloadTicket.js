import React, { useEffect, useState } from "react";
import "./DownloadTicket.css";

function DownloadTicket({ item }) {
  const [data, setData] = useState([]);

  const [ticketNumber, setTicketNumber] = useState(0);

  useEffect(() => {
    setData(item);
    setTicketNumber(GenerateARandomNumber());
  }, [data]);

  const GenerateARandomNumber = () => {
    var add = 1,
      max = 12 - add;

    if (6 > max) {
      return GenerateARandomNumber(max) + GenerateARandomNumber(6 - max);
    }

    max = Math.pow(10, 6 + add);
    var min = max / 10;
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
  };

  return (
    <div className="container">
      <div className="ticket">
        <div className="left">
          <div className="image">
            <p className="admit-one">
              <span>SHOW TICKET</span>
              <span>SHOW TICKET</span>
              <span>SHOW TICKET</span>
            </p>
            <div className="ticket-number">
              <p>#{ticketNumber}</p>
            </div>
          </div>
          <div className="ticket-info">
            <p className="date">
              <span>TUESDAY</span>
              <span className="month">JUNE 29TH</span>
              <span>2021</span>
              <h2>Timings</h2>
              <h2>Seat No</h2>
            </p>
            {item.map((currItem, index) => {
              return (
                <>
                  <div className="show-name">
                    <h1>{currItem.movieName.index}</h1>
                    <h2>Olivia Rodrigo</h2>
                    <h2>Timings</h2>
                    <h2>Seat No</h2>
                  </div>
                </>
              );
            })}
            <p className="location">
              <span>Cinepolis Cinema</span>
              <span className="separator">
                <i className="far fa-smile"></i>
              </span>
              <span>Udaipur, Rajasthan</span>
            </p>
          </div>
        </div>
        <div className="right">
          <p className="admit-one">
            <span>SHOW TICKET</span>
            <span>SHOW TICKET</span>
            <span>SHOW TICKET</span>
          </p>
          <div className="right-info-container">
            <div className="barcode">
              <img
                src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb"
                alt="QR code"
              />
            </div>
            <p className="ticket-number">#20030220</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadTicket;
