import React from 'react'
import Box from "@mui/material/Box";
import { Paper,Typography } from '@mui/material';
import Btn from '../../Components/Reusablecomponents/Btn'
import useForm from '../../Components/Validation/useForm'
import Calender from '../../Components/Reusablecomponents/Calender'
import DropDown from '../../Components/Reusablecomponents/Dropdownlist';
//import getDepartmentname from '../../Components/ReusableComponents/getDepartmentname'
import { getShift, getEmployee } from '../../Components/Dropdowndata/getDepartmentname'
const initialFvalues = {
    date: "",
    shift: "",
    employeename: ""
}
export default function HodShiftMgmnt() {
    const { values, errors, setErrors, handleInputChange } =
        useForm(initialFvalues);

    const validate = () => {
        let temp = {};
        temp.date = values.date ? "" : "date is required";
        temp.shift = values.shift ? "" : "department is required";
        temp.employeename = values.employeename ? "" : "employee name from is required";
        setErrors({ ...temp });
        return Object.values(temp).every((x) => x === "");
    };

    const handlesubmit = () => {
        if (validate()) {
            window.alert("successfully submited");
        }
    };
    return (
        <div>
            <form>
                <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{ color: "#1565C0", pb: "2%" }}
                    >
                       Assign Shift
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { sm: "1fr" },
                            gap: 2,
                            p: 3,
                            m: 3,
                            alignItems: "center"
                        }}
                    >
                        <Calender text=" Date" name="date" value={values.assigneddate} onChange={handleInputChange} error={errors.assigneddate} />

                        <DropDown
                            name="shift"
                            label="Shift"
                            value={values.shift}
                            handleInputChange={handleInputChange}
                            options={getShift()}
                            error={errors.shift}

                        />

                        <DropDown
                            name="employeename"
                            label="Employee"
                            value={values.employeename}
                            handleInputChange={handleInputChange}
                            options={getEmployee()}
                            error={errors.employeename}

                        />

                        <Box sx={{ pt: "2%", display: "flex", justifyContent: "center" }}>
                            <Btn text="Submit" click={handlesubmit} />
                        </Box>
                    </Box>
                </Paper>
            </form>
        </div>
    )
}
