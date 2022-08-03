import React from 'react'
import Button from '@mui/material/Button';
function Btn(props) {
  return (
    <>
    
    <Button onClick={props.click}  variant="contained" sx={{ background:'linear-gradient(#1565C0,#8B8B8B)' }}>{props.text}</Button>
    </>
  )
}

export default Btn