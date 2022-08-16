import React from 'react'
import TextField from '@mui/material/TextField';
export default function Time({text,name,value,onChange,error=null}) {
  return (
    <div> <>
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
       type="time"
       name={name}
       value={value}
       onChange={onChange}
       {...(error && {error:true,helperText:error})}
       InputLabelProps={{
         shrink: true,
       }}
     />
   {/* </div> */}
   </></div>
  )
}
