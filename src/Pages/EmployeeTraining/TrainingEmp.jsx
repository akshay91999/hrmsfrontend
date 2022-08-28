import { Paper } from "@mui/material";
import React from "react";

//import TrainingEmp from "./Components/TrainingEmp";
// import TrainingEmp from "./Components/TrainingEmp";
import TrainingEmpForm from "./TrainingEmpForm";
function TrainingEmp() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <TrainingEmpForm />
      </Paper>
    </div>
  );
}

export default TrainingEmp;