import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function Table(props) {
  const users = props.users;
  let totalParticipation = 0;
  for (let i = 0; i < users.length; i++) {
    totalParticipation += parseInt(users[i]["participation"]);
  }
  users.map(
    (usr) =>
      (usr["percentual"] = Math.round(
        (parseInt(usr["participation"]) / totalParticipation) * 100
      ))
  );
  console.log(users);
  const columns = [
    { field: "id", headerName: "", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "participation", headerName: "Participation", width: 120 },
    { field: "percentual", headerName: "Participation (%)", width: 120 },
  ];

  return (
    <div style={{ height: 400, width: 600, margin: "auto" }}>
      <DataGrid
        sx={{
          width: {
            xs: 300,
            sm: 500,
            md: 600,
          },
          margin: "auto",
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
