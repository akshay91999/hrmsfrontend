
import React from 'react'
import Btn from './Reusablecomponents/Btn';
import { Box } from '@mui/system';
import { TextField, Typography } from '@mui/material';


function Softskill(props) {
  const {name,values,handleInputChange}=props
 
  return (
    <>
     <Typography variant="h6" gutterBottom component="div">
         Soft Skills
        </Typography>
      
        <Box component="form"
          noValidate
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr' },
            gap: 2,
            mt: "2%",
            textAlign: "center",
          }}>
           <TextField
           name={name}
          label="Soft Skill"
          multiline
          rows={4}
          value={values.softskill}
          onChange={handleInputChange}
        />
        </Box>

       
    </>
  )
}

export default Softskill