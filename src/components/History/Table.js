import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { Button } from "@material-ui/core";
import CancelIcon from "@mui/icons-material/Cancel";
import moment from 'moment';
import DownloadIcon from '@mui/icons-material/Download';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


function Table({ data, email }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(data);
  }, [data]);

  const downloadPdf = (row) => {
    const doc = new jsPDF();
    doc.text("Ticket Details", 20, 10);

    autoTable(doc, {
      theme:"grid",
      head:[["ID", "Name","Seats","Price","Total Price","Email","Timings"]],
      body : [[row.tableData.id+1,row.name,row.seats,row.price,row.TotalPrice,row.email,row.timings]]
    })
    doc.save("ticket.pdf");
  };

  const columns = [
    { title: "Name", field: "name", width: 150 },
    { title: "Timings", field: "timings", width: 150 },
    { title: "Seats", field: "seats", width: 150 },
    {
      title: "Price",
      field: "price",
      width: 150,
      type: "currency",
      currencySetting: { currencyCode: "INR" },
    },
    {
      title: "Total Price",
      field: "TotalPrice",
      width: 150,
      type: "currency",
      currencySetting: { currencyCode: "INR" },
    },
    { title: "Date", field: "date", width: 150,render: (rowData) => moment(rowData.date).format("D MMMM YYYY")}, 
    {
      title: "Status",
      field: "status",
      width: 150,
      lookup: { 0: "Cancelled", 1: "Active" },
    },
  ];

  const cancelBooking = (id) => {
    axios
      .put(`https://booking-app-server.onrender.com/api/cancelTickets`, {
        id: id,
        email: email,
      })
      .then((response) => {
        setItem(response.data);
      });
  };

  return (
    <div style={{ height: 900, width: "100%" }}>
      <MaterialTable
        title="Tickets"
        data={item}
        columns={columns}
        options={{ sorting: true, search: true, actionsColumnIndex: -1 }}
        // editable={{
        //   onRowDelete: (row) =>
        //     new Promise((resolve, reject) => {
        //       cancelBooking(row.id);
        //       resolve();
        //     }),
        // }}
        actions={[
          {
            icon: () => (
              <Button
                color="primary"
                variant="contained"
                endIcon={<CancelIcon />}
              >
                Cancel Tickets
              </Button>
            ),
            tooltip: "Confirm",
            onClick: (event, rowData) => {
              cancelBooking(rowData.id);
              alert("Ticket Cancelled : " + rowData.name);
            },
          },
          {
            icon: () => (
              <DownloadIcon />
            ),
            tooltip: "DownloadTicket",
            onClick: (event, rowData) => {
              downloadPdf(rowData);
              alert("Ticket Downloaded : " + rowData.name);
            },
          },
        ]}
      />
    </div>
  );
}

export default Table;
