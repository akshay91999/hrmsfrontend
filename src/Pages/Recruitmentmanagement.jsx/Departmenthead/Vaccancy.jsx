import { Paper } from "@mui/material";
import React from "react";
import Vaccancyform from "../../../Components/Vaccancyform";


function Vaccancy() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Vaccancyform/>
      </Paper>
    </div>
  );
}

export default Vaccancy;
