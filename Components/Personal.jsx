import React from 'react'
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Marital from "./Marital";
import { useState } from "react";
import Textfield from './Textfield';
import Calender from './Calender';
import Btn from './Btn';

function Personal() {
   

    const [open, setOpen] = useState(false)
    const formOpen = () => {
        setOpen(true);
    };
    const formClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <fieldset>
                <legend><Typography variant="h6" gutterBottom component="div" sx={{ color:'#1565C0' }}>
                    Personal Details
                </Typography></legend>
                <Box
                    component="form"
                    noValidate
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { sm: '1fr 1fr' },
                        gap: 2,
                        width: "100%",
                        textAlign: "center"

                    }}
                >
                    <Textfield label="First Name" id="first-name" name="FirstName" value=""/>
                    <Textfield label="Last Name" id="last-name" name="LastName" value="" />
                </Box>
                <Box>
                    <FormControl sx={{ pt: "2%",pb:'2%' }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel size="small" value="female" control={<Radio />} label="Female" />
                            <FormControlLabel size="small" value="male" control={<Radio />} label="Male" />
                            <FormControlLabel size="small" value="other" control={<Radio />} label="Other" />

                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { sm: '1fr 1fr' },
                    gap: 2,
                    width: "100%",
                    textAlign: "center"

                }}>
                    <Calender text='date of birth'/>
                    <Textfield label="Nationality" id="nationality" name="Nationality" value=""/>
                </Box>
                <Box
                    component="form"
                    noValidate
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { sm: '1fr 1fr' },
                        gap: 2,
                        width: "100%",
                        mt: "2%",
                        textAlign: "center"
                    }}
                >  
                    <Textfield label="Contact Number" id="contact-no" name="ContactNumber" />
                    <Textfield label="Alternate Contact Number" id="alt-contact-no" name="altContactNumber" value=""/>
                    <Textfield label="Email id" id="email-id" name="" value=""/>
                    <Textfield label="Alternate Email id" id="alt-email-id" name="" value=""/>
                    <Textfield label="Father's Name" id="father's-name" name="" value=""/>
                    <Textfield label="Contact Number" id="father's-cntno" name="" value=""/>
                    <Textfield label="Mother's Name" id="mother's-name" name="" value=""/>
                    <Textfield label="Contact Number" id="mother's-cntno" name="" value=""/>

                </Box>
                <Box>
                    <FormControl sx={{ mt: "2%" }}>
                        <label id="demo-row-radio-buttons-group-label">Marital Status</label>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="single" control={<Radio />} label="Single" onClick={formClose} />
                            <FormControlLabel value="married" control={<Radio />} label="Married" onClick={formOpen} />
                        </RadioGroup>
                    </FormControl>
                    {/* <div className="marital">
                        { */}
                            {open ? <Marital sx={{ textAlign: "center" }} /> : null}
                        {/* } */}
                    {/* </div> */}
                    <Box sx={{display:"flex",justifyContent:"flex-end"}}><Btn text="Save" /></Box>
                </Box>
            </fieldset>
        </>
    )
}

export default Personal