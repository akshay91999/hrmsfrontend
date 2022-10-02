import { Box, Typography } from "@mui/material";
import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "back end devolopement",
    averageage: 26,
  },
  {
    name: "web page designing",
    averageage: 25,
  },
  {
    name: "software testing",
    averageage: 40,
  },
  {
    name: "Machine Learning",
    averageage: 30,
  },
  {
    name: "Artificial Intelligence",
    averageage: 32,
  },
  {
    name: "front end devolopement",
    averageage: 29,
  },
];

export default function AgeGroupAnalysis() {
  //   static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';

  return (
    <>
    <Box sx={{ width:"80vw", height: "70vh" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", m: "1%" }}
      >
        Age Group Analysis
      </Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
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
              <XAxis dataKey="name" />
              <YAxis dataKey="averageage" domain={[0, 55]} />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar dataKey="averageage" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="averageage" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </>
  );
}
