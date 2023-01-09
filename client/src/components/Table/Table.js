import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function Table(props) {
  const users = props.users;

  // calculates total amount of brute participation value to define the percentual ones
  let totalParticipation = 0;
  for (let i = 0; i < users.length; i++) {
    totalParticipation += Number(users[i]["participation"]);
  }

  // map through the users array passed as props from Home.js to
  // define an extra "percentual" in the client side only to be displayed in the table
  users.map(
    (usr) =>
      (usr["percentual"] = Math.round(
        (parseInt(usr["participation"]) / totalParticipation) * 100
      ))
  );

  // configuring the table columns according to the documentation of @mui/x-data-grid
  const columns = [
    { field: "id", headerName: "", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "participation", headerName: "Participation", width: 120 },
    { field: "percentual", headerName: "Participation (%)", width: 120 },
  ];

  // the DataGrid mui component with inline styles to be applied responsively
  return (
    <div style={{ height: 400, width: 600, margin: "auto" }}>
      <DataGrid
        sx={{
          width: {
            xs: 350,
            sm: 500,
            md: 600,
          },
          margin: "auto",
          marginLeft: {
            xs: "12%",
            sm: "auto",
          },
        }}
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default Table;
