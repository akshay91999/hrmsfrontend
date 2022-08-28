import React from 'react'
import Box from "@mui/material/Box";
import { Paper, Typography } from '@mui/material';
import Btn from '../../Components/Reusablecomponents/Btn'
import useForm from '../../Components/Validation/useForm'
import Calender from '../../Components/Reusablecomponents/Calender'
import DropDown from '../../Components/Reusablecomponents/Dropdownlist';
import Time from "../../Components/Reusablecomponents/Time"
import { getEmployee } from '../../Components/Dropdowndata/getDepartmentname'
const initialFvalues = {
    date: "",
    overtimefrom: "",
    overtimeto: "",
    employeename: ""
}
export default function HodOvertimeMgmnt() {
    const { values, errors, setErrors, handleInputChange } =
        useForm(initialFvalues);

    const validate = () => {
        let temp = {};
        temp.date = values.date ? "" : "date is required";
        temp.overtimefrom = values.overtimefrom ? "" : "From time is required";
        temp.overtimeto = values.overtimeto ? "" : "To time is required";
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
                        Assign Overtime
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
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { sm: "1fr 1fr" },
                                gap: 2,
                                width: "95%",
                            }}
                        >

                            <Time
                                text="From"
                                name="overtimefrom"
                                value={values.overtimefrom}
                                errors={errors}
                                onChange={handleInputChange}
                                error={errors.overtimefrom}
                            />

                            <Time
                                text="to"
                                name="overtimeto"
                                value={values.overtimeto}
                                errors={errors}
                                onChange={handleInputChange}
                                error={errors.overtimeto}
                            />
                        </Box>
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
