import { Paper } from "@mui/material";
import React from "react";
import ViewFeedbackForm from './ViewFeedbackForm'
function ViewFeedback() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <ViewFeedbackForm/>
      </Paper>
    </div>
  );
}

export default ViewFeedback;