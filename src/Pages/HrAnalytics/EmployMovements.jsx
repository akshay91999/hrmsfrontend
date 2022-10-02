import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    movements: 8,
  },
  {
    name: "Feb",
    movements: 4,
  },
  {
    name: "Mar",
    movements: 2,
  },
  {
    name: "Apr",
    movements: 9,
  },
  {
    name: "May",
    movements: 11,
  },
  {
    name: "June",
    movements: 0,
  },
  {
    name: "July",
    movements: 12,
  },
  {
    name: "Aug",
    movements: 3,
  },
  {
    name: "Sep",
    movements: 9,
  },
  {
    name: "Oct",
    movements: 7,
  },
  {
    name: "Nov",
    movements: 5,
  },
  {
    name: "Dec",
    movements: 8,
  },
];

export default function EmployMovements() {
  return (
    <>
    <Box sx={{ width:"80vw", height: "70vh" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", mt: "1%" }}
      >
        Employee Movements
      </Typography>
        <Box sx={{ width:"100%",height:'100%',display:'flex',justifyContent:'center' }}>
      <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={"50%"}
        height={"50%"}
        data={data}
        margin={{
          top: 40,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
       
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis datakey="movements" domain={[0, 10]}/>
        <Tooltip />
        <Area type="monotone" dataKey="movements" stroke="#000000" fill="#1565C0" />
      </AreaChart>
      </ResponsiveContainer>
       </Box>
       </Box>
    </>
    
  );
}
