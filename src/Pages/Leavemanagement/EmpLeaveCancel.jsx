import React from 'react'
import { Box, TextField } from '@mui/material'
import Textarea from '../../Components/Reusablecomponents/Textarea'
function EmpLeaveCancel(props) {
    const {values,errors,handleInputChange}=props

    return (
        <div>
           
            <Box sx={{ display: "flex", justifyContent: "center", mt: "10%",width:"100%" }}>
            <TextField
          id="outlined-multiline-static"
          label="Reason"
          multiline
          rows={4}
        sx={{width:400}}
       
              name="reason"
              value={values.reason}
              errors={errors}
              onChange={handleInputChange}
              error={errors.reason} 
              {...(errors.reason && { error: true, helperText: errors.reason })} 
        />
            </Box>
            
        </div>
    )
}

export default EmpLeaveCancel