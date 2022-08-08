import React from 'react'
import { Box } from '@mui/material'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Btn from '../../Components/Reusablecomponents/Btn'
import Card from '@mui/material/Card';
import { Typography } from "@mui/material"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom'
import Textfield from '../../Components/Reusablecomponents/Textfield';
import useForm from '../../Components/Validation/useForm';
import { FormHelperText } from "@mui/material";
const initialFvalues = {
    usertype: "",
    emailid:"",
    username: "",
    password: "",
}
function Register() {
    const regex = /\S+@\S+\.\S+/
    const { values, errors, setErrors, handleInputChange } = useForm(initialFvalues)
    const validate = () => {
        let temp = {};
        temp.usertype = values.usertype ? "" : "This field is required";
        temp.emailid = regex.test(values.emailid) ? "" : "Invalid Email";
        temp.username = values.username ? "" : "This field is required";
        temp.password = values.password ? "" : "This field is required";

        setErrors({
            ...temp,
        });
        return Object.values(temp).every((x) => x === "");
    };
    const handlesubmit = () => {

        if (validate()) {
            window.alert("successfully submited")
        }
    }
    let navigate = useNavigate()
    return (
        <div>
            {/* <fieldset>
            <legend>
          <Typography variant="h6" gutterBottom component="div">
            REGISTER
          </Typography>
        </legend> */}
            <Box sx={{ display: "flex", justifyContent: "center", m: 10 }}>
                <Card sx={{ width: "25%" }}>
                    <CardContent>
                        <Typography variant="h6" align="center" gutterBottom component="div">
                            REGISTER
                        </Typography>
                        {/* <form onSubmit={handlesubmit}> */}
                            <Box

                                component="form"
                                noValidate
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { sm: '1fr' },
                                    gap: 2,
                                    justifyContent: "center",
                                    width: "100%",
                                    align: "center"

                                }}
                            >
                                <FormControl size="small"
                                    sx={{
                                        // mt: 1,
                                        // ml: 5,
                                        width: "90%",
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#1565C0",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "brown",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#1565C0",
                                            },
                                        },
                                    }}

                                    {...(errors.usertype && { error: true })}
                                >
                                    <InputLabel id="demo-select-small">User Type</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={values.usertype}
                                        label="Usertype"
                                        name="usertype"
                                        onChange={handleInputChange}
                                        error={errors.usertype}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"HOD"}>Department Head</MenuItem>
                                        <MenuItem value={"EMP"}>Employee</MenuItem>
                                        <MenuItem value={"HR"}>HR</MenuItem>

                                    </Select>
                                    {errors.usertype && <FormHelperText>{errors.usertype}</FormHelperText>}
                                </FormControl>
                                <Textfield label="emailid" name="emailid" value={values.emailid} error={errors.emailid} onChange={handleInputChange} />
                                <Textfield label="Username" name="username" value={values.username} error={errors.username} onChange={handleInputChange} />
                                <Textfield label="Password" name="password" value={values.password} error={errors.password} onChange={handleInputChange} /></Box>
                            <Box sx={{ display: "flex", justifyContent: "center", m: "2%" }}>
                                <Btn text="ADD" type="submit" click={handlesubmit} />
                            </Box>
                            {/* </form> */}
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: '1%' }}>
                <Btn text="Back" click={() => navigate(-1)}/>
            </Box>
            {/* </fieldset> */}
        </div>
    )
}

export default Register