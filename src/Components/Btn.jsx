import React from 'react'
import Button from '@mui/material/Button';
function Btn(props) {
  const {click,text,type}=props
  return (
    <>
    
    <Button onClick={click}  variant="contained" type={type} sx={{ background:'linear-gradient(#1565C0,#8B8B8B)' }}>{text}</Button>
    </>
  )
}

export default Btn