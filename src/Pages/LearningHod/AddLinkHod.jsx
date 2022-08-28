import { Paper } from "@mui/material";
import React from "react";
import AddLinkHodForm from "../../Pages/LearningHod/AddLinkHodForm";
function AddLinkHod() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <AddLinkHodForm />
      </Paper>
    </div>
  );
}

export default AddLinkHod;