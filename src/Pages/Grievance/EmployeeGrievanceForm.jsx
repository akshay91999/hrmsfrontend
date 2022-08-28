import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Multiline from '../../Components/Reusablecomponents/Multiline';
import Calender from '../../Components/Reusablecomponents/Calender'
import useForm from '../../Components/Validation/useForm';
import Btn from '../../Components/Reusablecomponents/Btn';


const initialFvalues = {
    calender: "",
    grievance: "",
    solution: "",
};
export default function EmployeeGerievanceForm() {

    const { values, errors, setErrors, handleInputChange } =
        useForm(initialFvalues);
    const validate = () => {
        const temp = {};
        temp.calender = values.calender ? "" : "please enter a Calender";
        temp.grievance = values.grievance ? "" : "please enter grievance";
        temp.solution = values.solution ? "" : "please enter a solution";

        setErrors({ ...temp });
        return Object.values(temp).every((x) => x === "");
    };
    const handlesubmit = () => {
        if (validate()) {
            window.alert("successfully updated");
        }
    };


    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{ color: "#1565C0", pb: "2%" }}
            >
                Grievance
            </Typography>


            <Box
                component="form"
                novalidate
                sx={{
                    display: "grid",
                    gridTemplateColumns: { sm: "1fr" },
                    gap: 2,
                    width: "100%",
                }}
            >
                <Calender
                    text="Date"
                    name="calender"
                    value={values.calender}
                    onChange={handleInputChange}
                    error={errors.calender}
                />

                <Multiline
                    text="grievance"
                    label="grievance"
                    name="grievance"
                    id="grievance"
                    value={values.grievance}
                    error={errors.grievance}
                    onChange={handleInputChange}
                />
                <Multiline
                    text="Proposed solution"
                    label="Proposed solution"
                    name="solution"
                    id="solution"
                    value={values.solution}
                    error={errors.solution}
                    onChange={handleInputChange}
                />


            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", m: "2%" }}>
                <Btn text="Submit" click={handlesubmit} />
            </Box>
        </>
    );

}
