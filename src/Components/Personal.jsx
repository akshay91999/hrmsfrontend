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
import Textfield from './Reusablecomponents/Textfield';
import Calender from './Reusablecomponents/Calender';
import Btn from './Reusablecomponents/Btn';
import useForm from './Validation/useForm';


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
    const { values,errors,setErrors,handleInputChange } = useForm(initialFvalues)

    const [open, setOpen] = useState(false)

  

    const formOpen = () => {
        setOpen(true);
    };
    const formClose = () => {
        setOpen(false);
    };
    
    const regex = /\S+@\S+\.\S+/
    const validate = () => {
        let temp={}
        temp.firstname=values.firstname?"":"firstname is required"
        temp.lastname=values.lastname?"":"lastname is required"
        temp.dob=values.dob?"":"dob is required"
        temp.nationality=values.nationality?"":"nationality is required"
        temp.contactnumber=values.contactnumber.length> 9?"":"contactnumber requires minimum 9 numbers"
        temp.emailid=regex.test(values.emailid)?"":"email is not valid"
        temp.altemailid=regex.test(values.emailid)?"":"email is not valid"
        temp.fathername=values.fathername?"":"father's name is required"
        temp.fcontactnumber=values.fcontactnumber?"":"father's contact is required"
        temp.mothername=values.mothername?"":"mother's name is required"
        temp.mcontactnumber=values.mcontactnumber?"":"mother's contact is required"
        setErrors({...temp } )
        return Object.values(temp).every(x=>x==="")
    }
    const handlesubmit=()=>{

        if(validate()){
            window.alert("successfully submited")
        }
    }
    
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
                    
                    <Textfield label="First Name" id="first-name" name="firstname" value={values.firstname} onChange={handleInputChange} error={errors.firstname}/>
                    <Textfield label="Last Name" id="last-name" name="lastname" value={values.lastname} onChange={handleInputChange} error={errors.lastname} />
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
                    <Calender text='date of birth' name="dob" value={values.dob} onChange={handleInputChange} error={errors.dob}/>
                    <Textfield label="Nationality" id="nationality" name="nationality" value={values.nationality} onChange={handleInputChange} error={errors.nationality}/>
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
                    <Textfield label="Contact Number" id="contact-no" name="contactnumber" value={values.component} onChange={handleInputChange} error={errors.contactnumber}/>
                    <Textfield label="Alternate Contact Number" id="alt-contact-no" name="altcontactnumber" value={values.altcontactnumber} onChange={handleInputChange} />
                    <Textfield label="Email id" id="email-id" name="emailid" value={values.emailid} onChange={handleInputChange} errors={errors.emailid} error={errors.emailid}/>
                    <Textfield label="Alternate Email id" id="alt-email-id" name="altemailid" value={values.altemailid} onChange={handleInputChange} error={errors.altemailid}/>
                    <Textfield label="Father's Name" id="father's-name" name="fathername" value={values.fathername} onChange={handleInputChange} error={errors.fathername}/>
                    <Textfield label="Contact Number" id="father's-cntno" name="fcontactnumber" value={values.fcontactnumber} onChange={handleInputChange} error={errors.fcontactnumber}/>
                    <Textfield label="Mother's Name" id="mother's-name" name="mothername" value={values.mothername} onChange={handleInputChange} error={errors.mothername}/>
                    <Textfield label="Contact Number" id="mother's-cntno" name="mcontactnumber" value={values.mcontactnumber} onChange={handleInputChange} error={errors.mcontactnumber}/>

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
                    <Box sx={{display:"flex",justifyContent:"flex-end"}}><Btn text="Save" click={handlesubmit} /></Box>
                </Box>
            </fieldset>
        </form>
    )
}

export default Personal