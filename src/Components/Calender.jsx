import React from 'react'
import TextField from '@mui/material/TextField';

function Calender({text,name,value,onChange}) {
    
  return (
    <>
     {/* <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}> */}
      <TextField size='small' sx={{width:'90%','& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#1565C0',
      },
      '&:hover fieldset': {
        borderColor: 'brown',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1565C0',
      },
    }
    }}
        id="date"
        label={text}
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    {/* </div> */}
    </>
  )
}

export default Calender