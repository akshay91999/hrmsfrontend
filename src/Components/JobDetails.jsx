import React from 'react'
import { Box } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Textfield from './Reusablecomponents/Textfield';
import Calender from './Reusablecomponents/Calender';
import Btn from './Reusablecomponents/Btn';
import { FormHelperText } from '@mui/material';
import useForm from './Validation/useForm';
const initialFvalues = {
    designation: "",
    department: "",
    branch: "",
    package: "",
    jobtype: "",
    doj:""

}
function JobDetails() {
    const validate = () => {
        let temp = {}
        temp.designation = values.designation ? "" : "This field is required"
        temp.department = values.department ? "" : "This field is required"
        temp.branch = values.branch ? "" : "This field is required"
        temp.package = values.package ? "" : "This field is required"
        temp.jobtype = values.jobtype ? "" : "This field is required"
        temp.doj = values.doj ? "" : "This field is required"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === "")
    }

    const { values,errors,setErrors,handleInputChange } = useForm(initialFvalues)

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            console.log(values)
          window.alert('testing')
        }
      }

    
    return (
        <div>
             <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { sm: '1fr 1fr' },
                    gap: 2,
                    width: "100%",
                }}>
                <Textfield label="Designation" name="designation" value={values.designation} error={errors.designation} onChange={handleInputChange}/>
                <Textfield label="Department" name="department" value={values.department} error={errors.department} onChange={handleInputChange}/>
                <Textfield label="Branch" name="branch" value={values.branch} error={errors.branch} onChange={handleInputChange}/>
                <Textfield label="Package" name="package"value={values.package} error={errors.package} onChange={handleInputChange} />

                <FormControl sx={{
                    width: "90%",
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'green',
                        },
                        '&:hover fieldset': {
                          borderColor: 'brown',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'green',
                        },
                       
                      },
                }} size="small"
                {...(errors.jobtype&&{error:true})}>
                    <InputLabel id="demo-select-small" >Type</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={values.jobtype}
                        label="Type"
                        name="jobtype"
                        onChange={handleInputChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"pt"}>Part time</MenuItem>
                        <MenuItem value={"ft"}>Full time</MenuItem>
                    </Select>
                    {errors.jobtype&&<FormHelperText>{errors.jobtype}</FormHelperText>}
                </FormControl>
                <Calender text="Date Of Joining" name="doj" value={values.doj} error={errors.doj} onChange={handleInputChange}/>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", m: "1%", }}>
                <Btn text="Save" type="submit" />
            </Box>
            </form>
        </div>
    )
}

export default JobDetails