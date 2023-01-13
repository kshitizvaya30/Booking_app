import React from "react";
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";

// const VISIBLE_FIELDS = ["name", "country", "dateCreated", "isAdmin"];

function Table({data}) {
  const rows: GridRowsProp = data;
 
  const columns: GridColDef[] = [
    { field: "id", headerName: "Movie Name", width: 150 },
    { field: "timing_id", headerName: "Timings", width: 150 },
    { field: "show_id", headerName: "Type", width: 150 },
    { field: "seats", headerName: "seats", width: 150 },
    { field: "Price", headerName: "Price", width: 150 },
    { field: "TotalPrice", headerName: "Total Price", width: 150 },
  ];

  return (
    <div style={{ height: 900, width: "100%" }}>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
      />
    </div>
  );
}

export default Table;
