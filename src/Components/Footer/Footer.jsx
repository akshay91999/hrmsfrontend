import * as React from "react";
import { Typography, Link } from "@mui/material";
export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        background: "linear-gradient(#1565C0,#8B8B8B)",
        pt: "0.5%",
        pb: "0.5%",
        color: "white",
        position: "relative",
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
