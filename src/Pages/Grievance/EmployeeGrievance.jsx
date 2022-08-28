import { Paper } from "@mui/material";
import React from "react";
import EmployeeGerievanceForm from '../../Pages/Grievance/EmployeeGrievanceForm'
function EmployeeGrievance() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <EmployeeGerievanceForm />
      </Paper>
    </div>
  );
}

export default EmployeeGrievance;