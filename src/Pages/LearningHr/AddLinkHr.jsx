import { Paper } from "@mui/material";
import React from "react";
import AddLinkHrForm from "../../Pages/LearningHr/AddLinkHrForm";
function AddLinkHr() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <AddLinkHrForm />
      </Paper>
    </div>
  );
}

export default AddLinkHr;