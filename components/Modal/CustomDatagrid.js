import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "date",
    headerName: "Date",
    width: 150,
    editable: true,
  },
  {
    field: "task",
    headerName: "Project/Task",
    width: 150,
    editable: true,
  },
  {
    field: "minutes",
    headerName: "Minutes",
    type: "number",
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, date: 1, task: "Snow", minutes: 35 },
  { id: 2, date: 1, task: "Snow", minutes: 35 },
  { id: 3, date: 1, task: "Snow", minutes: 35 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
