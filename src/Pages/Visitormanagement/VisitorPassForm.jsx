import React from 'react'
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Textfield from '../../Components/Reusablecomponents/Textfield';
import { Box } from '@mui/system';
import useForm from '../../Components/Validation/useForm';
import { Paper } from '@mui/material'
// import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Time from '../../Components/Reusablecomponents/Time';
import Dropdownlist from '../../Components/Reusablecomponents/Dropdownlist';
import { getDepartmentname } from '../../Components/Dropdowndata/getDepartmentname';
import Btn from '../../Components/Reusablecomponents/Btn';
import { useNavigate } from 'react-router-dom'
import {Typography} from '@mui/material';
const initialFvalues = {
    name: '',
    address: '',
    idproofnum: '',
    timein: '',
    timeout: '',
    contactperson: '',
    departmentname: '',
    empid: '',
    reason: ''
    // img:''
}
export default function VisitorPassForm() {
    let navigate = useNavigate()
    const { values, errors, setErrors, handleInputChange } =
        useForm(initialFvalues)
    const validate = () => {
        let temp = {}
        temp.name = values.name ? "" : "This field is required"
        temp.address = values.address ? "" : "This field is required"
        temp.idproofnum = values.idproofnum ? "" : "This field is required"
        temp.timein = values.timein ? "" : "This field is required"
        temp.timeout = values.timeout ? "" : "This field is required"
        temp.contactperson = values.contactperson ? "" : "This field is required"
        temp.departmentname = values.departmentname ? "" : "This field is required"
        temp.empid = values.empid ? "" : "This field is required"
        temp.reason = values.reason ? "" : "This field is required"
        // temp.img = values.img ? "" : "This field is required"
        setErrors({ ...temp })
        return Object.values(temp).every(x => x === "")
    }
    const handlesubmit = () => {
        // loging values
        console.log(values)
        if (validate()) {
            window.alert("successfully submited")
            navigate('/VisitorCard')
        }
    }



    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Paper elevation={4} sx={{ m: "2%", p: "2%", width: "100%" }}>
                <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Visitor Pass Form
        </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { sm: "0fr 1fr 2fr 2fr" },
                            gap: 2,
                            width: "100%",
                            mt: "2%",
                        }}
                    >
                        <img src={image} width="100" height="100" />
                        <input type="file" onChange={onImageChange} className="filetype" />
                        <Textfield label="Name" name="name" value={values.name} error={errors.name} onChange={handleInputChange} />
                        <Textfield label="Address" name="address" value={values.address} error={errors.address} onChange={handleInputChange} />
                    </Box>
                    <Box
                        component="form"
                        noValidate
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { sm: "1fr 1fr 1fr" },
                            gap: 2,
                            width: "100%",
                            mt: "2%",
                            // textAlign: "center",
                        }}
                    ><Textfield label="Id Proof Number" name="idproofnum" value={values.idproofnum} error={errors.idproofnum} onChange={handleInputChange} />
                        <Time
                            text="Time In"
                            name="timein"
                            value={values.timein}
                            errors={errors}
                            onChange={handleInputChange}
                            error={errors.timein}
                            renderInput={(parameters) => <TextField {...parameters} />}
                        />
                        <Time
                            text="Time Out"
                            name="timeout"
                            value={values.timeout}
                            errors={errors}
                            onChange={handleInputChange}
                            error={errors.timeout}
                        />
                        <Textfield label="Contact Person" name="contactperson" value={values.contactperson} error={errors.contactperson} onChange={handleInputChange} />
                        <Dropdownlist
                            name="departmentname"
                            label="DepartmentName"
                            value={values.departmentname}
                            handleInputChange={handleInputChange}
                            options={getDepartmentname()}
                            error={errors.departmentname}
                        />
                        <Textfield label="Employee Id" name="empid" value={values.empid} error={errors.empid} onChange={handleInputChange} />

                    </Box>
                    <Box sx={{ mt: "1%", display: "grid", gridTemplateColumns: { sm: "1fr" }, gap: 2, }}>
                        <TextField sx={{ width: "97%" }}
                            id="outlined-multiline-static"
                            label="Reason"
                            name="reason"
                            value={values.reason} error={errors.reason} onChange={handleInputChange}
                            multiline
                            rows={4}
                            {...(errors.reason && { error: true, helperText: errors.reason })}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: '1%' }}>
                        <Btn text="Submit" click={handlesubmit} />
                    </Box>
                </Paper>
            </Box>
        </>
    )
}
