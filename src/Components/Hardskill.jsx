import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';

function Hardskill(props) {
  const {name,values,handleInputChange}=props
  return (
    <>
      
        <Typography variant="h6" gutterBottom component="div">
         Hard skills
        </Typography>
      
        <Box component="form"
          noValidate
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr' },
            gap: 2,
            mt: "2%",
            textAlign: "center"
          }}>
          <TextField
          name={name}
          label="Soft Skill"
          multiline
          rows={4}
          value={values.hardskill}
          onChange={handleInputChange}
        />
        </Box>
     
    </>
  )
}

export default Hardskill