import { Paper } from "@mui/material";
import React from "react";
import AcceptTrainingForm from './AcceptTrainingForm';
function AcceptTraining() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <AcceptTrainingForm />
      </Paper>
    </div>
  );
}

export default AcceptTraining;