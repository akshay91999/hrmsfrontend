
import React from 'react'
import Textfield from './Reusablecomponents/Textfield';
import Btn from './Reusablecomponents/Btn';
import { Box } from '@mui/system';
import { useState } from "react";

function Softskill() {
  
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
  

      
        <Box component="form"
          noValidate
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr' },
            gap: 2,
            mt: "2%",
            textAlign: "center",
          }}>
          {Array.from(Array(counter)).map((c, index) => {
            return <Textfield name={"skill"+counter}/>;
          })}
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: "1%" }}
        >
          <Box sx={{ pt: "1%" }}>
            <Btn text="Add" click={handleClick} />
          </Box>
        </Box>
        <Box sx={{ p: "1%" }}><Btn text="Save" /></Box>

       
    </>
  )
}

export default Softskill