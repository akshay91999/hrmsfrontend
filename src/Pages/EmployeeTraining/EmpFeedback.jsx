import { Paper } from "@mui/material";
import React from "react";
import EmpFeedbackForm from './EmpFeedbackForm'
function EmpFeedback() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <EmpFeedbackForm/>
      </Paper>
    </div>
  );
}

export default EmpFeedback;