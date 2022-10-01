import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { PureComponent, useEffect } from "react";
import { useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Legend,Tooltip } from "recharts";



const COLORS = ["#82ca9d", "#AF19FF", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default function GenderAnalysis() {
  const [gend,setGend]=useState({})
  useEffect(()=>{
    axios.get("http://localhost:5000/hranalytics/gender")
    .then(function(response){
      console.log(response)
      setGend(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
  },[])
  const data = [
    { name: "Male", value: gend.male },
    { name: "Female", value: gend.female },
    { name: "Others", value: gend.other },
  ];
  //   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  return (
    <>
    <Box sx={{ width:"80vw", height: "70vh" }}>
    <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", mt: "1%" }}
      >
        Gender Analysis
      </Typography>
   
    <Box sx={{ width: "100%", height: "100%",display:'flex',justifyContent:'center',direction:'column' }}>
        <ResponsiveContainer width="100%" height="100%" >
          <PieChart width={"50%"} height={"50%"} >
            <Pie
              data={data}
              color="#000000"
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={"90%"}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
    </>
  );
}
