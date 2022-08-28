import { Paper } from "@mui/material";
import React from "react";
import ViewLinkEmployeeForm from './ViewLinkEmployeeForm'
function ViewLinkEmployee() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <ViewLinkEmployeeForm />
      </Paper>
    </div>
  );
}

export default ViewLinkEmployee;