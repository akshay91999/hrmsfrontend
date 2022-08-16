import React from "react";
import Textfield from "../../Components/Reusablecomponents/Textfield";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
import { useState } from "react";
import Calender from "../../Components/Reusablecomponents/Calender";
import Btn from "../../Components/Reusablecomponents/Btn";
import useForm from "../../Components/Validation/useForm";
const initialFvalues = {
    taskname: "",
    assigneddate: "",
    duedate: "",
};

export default function DepartmentHeadAssignTaskForm() {
    const { values, errors, setErrors, handleInputChange } =
        useForm(initialFvalues);


    const validate = () => {
        let temp = {};
        temp.taskname = values.taskname ? "" : "employeeid is required";
        temp.assigneddate = values.assigneddate ? "" : "employeetype is required";
        temp.duedate = values.duedate ? "" : "duration from is required";
        setErrors({ ...temp });
        return Object.values(temp).every((x) => x === "");
    };

    const handlesubmit = () => {
        if (validate()) {
            window.alert("successfully submited");
        }
    };
    return (
        <>
            <Paper sx={{m:"2%",pl:"6%"}}>
                <Typography varient="h6" align="center" gutterButtom component="div"
                sx={{pt:5}}>
                    Assign Task
                </Typography>
                <form>
                    <Box
                        component="form"
                        noValidate
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { sm: "1fr" },
                            gap: 2,
                            p:3,
                            m:3,
                            alignItems:"center"
                        }}
                    >
                        <Textfield
                            label="Task Name"
                            id="taskname"
                            name="taskname"
                            value={values.taskname}
                            onChange={handleInputChange}
                            error={errors.taskname}
                        />
                        <Calender text="Assigned Date" name="assigneddate" value={values.assigneddate} onChange={handleInputChange} error={errors.assigneddate} />
                        <Calender text="Due Date" name="duedate" value={values.duedate} onChange={handleInputChange} error={errors.duedate} />
                        {/* </Box> */}

                        <Box sx={{ pt: "2%", display: "flex", justifyContent: "center" }}>
                            <Btn text="Submit" click={handlesubmit} />
                        </Box>
                    </Box>
                </form>
            </Paper>
        </>
    );
}
