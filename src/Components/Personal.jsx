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
import useForm from './useForm';
import { SliderValueLabelUnstyled } from '@mui/base';

const initialFvalues={
    firstname:"",
    lastname:"",
    gender:"male",
    dob:"",
    nationality:"",
    contactnumber:"",
    altcontactnumber:"",
    emailid:"",
    altemailid:"",
    fathername:"",
    fcontactnumber:"",
    mothername:"",
    mcontactnumber:"",
    martialstatus:"single",
    spousename:"",
    scontactnumber:""

}

function Personal() {
    const { values, setValues,handleInputChange } = useForm(initialFvalues)

    const [open, setOpen] = useState(false)
    const formOpen = () => {
        setOpen(true);
    };
    const formClose = () => {
        setOpen(false);
    };
    
    return (
        <form>

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
                    <Textfield label="First Name" id="first-name" name="firstname" value={values.firstname} onChange={handleInputChange} />
                    <Textfield label="Last Name" id="last-name" name="lastname" value={values.lastname} onChange={handleInputChange} />
                </Box>
                <Box>
                    <FormControl sx={{ pt: "2%",pb:'2%' }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}
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
                    <Calender text='date of birth' name="dob" value={values.dob} onChange={handleInputChange}/>
                    <Textfield label="Nationality" id="nationality" name="nationality" value={values.nationality} onChange={handleInputChange}/>
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
                    <Textfield label="Contact Number" id="contact-no" name="contactnumber" value={values.component} onChange={handleInputChange}/>
                    <Textfield label="Alternate Contact Number" id="alt-contact-no" name="altcontactnumber" value={values.altcontactnumber} onChange={handleInputChange}/>
                    <Textfield label="Email id" id="email-id" name="emailid" value={values.emailid} onChange={handleInputChange}/>
                    <Textfield label="Alternate Email id" id="alt-email-id" name="altemailid" value={values.altemailid} onChange={handleInputChange}/>
                    <Textfield label="Father's Name" id="father's-name" name="fathername" value={values.fathername} onChange={handleInputChange}/>
                    <Textfield label="Contact Number" id="father's-cntno" name="fcontactnumber" value={values.fcontactnumber} onChange={handleInputChange}/>
                    <Textfield label="Mother's Name" id="mother's-name" name="mothername" value={values.mothername} onChange={handleInputChange}/>
                    <Textfield label="Contact Number" id="mother's-cntno" name="mcontactnumber" value={values.mcontactnumber} onChange={handleInputChange}/>

                </Box>
                <Box>
                    <FormControl sx={{ mt: "2%" }}>
                        <label id="demo-row-radio-buttons-group-label">Marital Status</label>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="martialstatus"
                            value={values.martialstatus}
                            onChange={handleInputChange}
                        >
                            <FormControlLabel value="single" control={<Radio />} label="Single" onClick={formClose} />
                            <FormControlLabel value="married" control={<Radio />} label="Married" onClick={formOpen} />
                        </RadioGroup>
                    </FormControl>
                    {/* <div className="marital">
                        { */}
                            {open ? <Marital sx={{ textAlign: "center" }} values={values} onChange={handleInputChange}/> : null}
                        {/* } */}
                    {/* </div> */}
                    <Box sx={{display:"flex",justifyContent:"flex-end"}}><Btn text="Save" /></Box>
                </Box>
            </fieldset>
        </form>
    )
}

export default Personal