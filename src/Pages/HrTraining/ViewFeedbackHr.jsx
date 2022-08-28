import { Paper } from "@mui/material";
import React from "react";
import ViewFeedbackFormHr from './ViewFeedbackFormHr'
function ViewFeedbackHr() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <ViewFeedbackFormHr/>
      </Paper>
    </div>
  );
}

export default ViewFeedbackHr;