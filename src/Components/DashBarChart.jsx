
import { Card } from '@mui/material';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '2',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '3',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '4',
   absent:10
    
  },
  {
    name: '5',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '6',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '7',
    forenoon: 4.5,
    break:0.5,
    afternoon: 5,
    
  },
  {
    name: '8',
    forenoon: 3.5,
    break:0.5,
    afternoon: 5,
    
  },
  {
    name: '9',
    forenoon: 5.5,
    break:0.5,
    afternoon: 4,
    
  },
  {
    name: '10',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '11',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '12',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '13',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '14',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '15',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '16',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '17',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '18',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '19',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '20',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '21',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  {
    name: '22',
    forenoon: 3.5,
    break:0.5,
    afternoon: 6,
    
  },
  
];

export default function DashBarChart(){
//   const demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

    return (
      <Card sx={{ width:'100%',height:'100%',borderRadius: "10px", p: "2%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={10}
          barGap={2}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0,10]}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="forenoon" stackId="a" fill="#8884d8" />
          <Bar dataKey="break" stackId="a" fill="#930012" />
          <Bar dataKey="afternoon" stackId="a" fill="#82ca9d" />
          <Bar dataKey="absent" stackId="a" fill="red" />

          
        </BarChart>
      </ResponsiveContainer>
      </Card>
     
    );
  }