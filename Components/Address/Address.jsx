import React from 'react'
import Box from '@mui/material/Box';
import Btn from '../Btn'
import Typography from '@mui/material/Typography';
import Textfeild from '../Textfield';
function Address(props) {
  return (
    <>
    <fieldset>
            <legend><Typography variant="h6" gutterBottom component="div" sx={{ color:'#1565C0' }}>
              {props.text}
            </Typography></legend>
            <Box
              component="form"
              noValidate
              sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr 1fr' },
                gap: 2,
                width: "100%",
                textAlign:"center"
              }}
            >


              <Textfeild name="Adrress" id={props.address}/>
              <Textfeild name="State" id={props.state} />
              <Textfeild name="Country" id={props.country}/>
              <Textfeild name="PinCode" id={props.pincode}/>
              
            </Box>

            <Box sx={{display:"flex",justifyContent:"flex-end",pt:'4%'}}><Btn text="Save" /></Box>
          </fieldset>
    </>
  )
}

export default Address