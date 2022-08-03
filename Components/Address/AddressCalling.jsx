import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Address from "./Address";
import { useState } from 'react';

function AddressCalling() {
    const [check,setCheck]=useState(false)
    const Sameaddress=()=>{
        setCheck(true)
    }
    const Diffaddress=()=>{
        setCheck(false)
    }
  return (
    <>
       <Address text="Permanant address" adrress='permanantaddress'  state='permanantstate' country='permanantcountry' pincode='permanantpincode'  />
        <Typography variant="h6">Are the permanent and current address same?<RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="Yes" id="check" control={<Radio />} label="Yes" onClick={Sameaddress}/>
          <FormControlLabel value="No" control={<Radio />} label="No" onClick={Diffaddress} />
        </RadioGroup></Typography>
        {check?
        null
        :
        <Address text="Current address" address='currentaddress'  state='currentstate' country='currentcountry' pincode='currentpincode'   />
         }
          </>
  )
}

export default AddressCalling
