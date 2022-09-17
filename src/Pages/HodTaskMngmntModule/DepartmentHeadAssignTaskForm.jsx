import React from "react";
import Textfield from "../../Components/Reusablecomponents/Textfield";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
import { useState } from "react";
import Calender from "../../Components/Reusablecomponents/Calender";
import Btn from "../../Components/Reusablecomponents/Btn";
import useForm from "../../Components/Validation/useForm";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const initialFvalues = {
  projectname: "",
  taskname: "",
  assigneddate: "",
  duedate: "",
};

export default function DepartmentHeadAssignTaskForm() {
    let navigate=useNavigate()
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const params = useParams();
  console.log(params);

  const validate = () => {
    let temp = {};
    temp.projectname = values.projectname ? "" : "employeeid is required";
    temp.taskname = values.taskname ? "" : "employeeid is required";
    temp.assigneddate = values.assigneddate ? "" : "employeetype is required";
    temp.duedate = values.duedate ? "" : "duration from is required";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const user = {
    projectname: values.projectname,
    taskname: values.taskname,
    assigndate: values.assigneddate,
    due_date: values.duedate,
  };

  const handlesubmit = () => {
    console.log(user);
    if (validate()) {
      axios
        .post("http://localhost:5000/task/" + params.basicId, user, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
          window.alert("successfully submited");
          console.log(response);

          // let id = response.data.data;
          // console.log(id);
          // if (response.data.message === "success") {
          //   window.alert("successfully submited");
          // }
          // else{
          //   window.alert(response.data.message)
          // }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Paper sx={{ m: "2%", pl: "6%" }}>
        <Typography
          varient="h6"
          align="center"
          gutterButtom
          component="div"
          sx={{ pt: 5 }}
        >
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
              p: 3,
              m: 3,
              alignItems: "center",
            }}
          >
            <Textfield
              label="Project Name"
              id="projectname"
              name="projectname"
              value={values.projectname}
              onChange={handleInputChange}
              error={errors.projectname}
            />
            <Textfield
              label="Task Name"
              id="taskname"
              name="taskname"
              value={values.taskname}
              onChange={handleInputChange}
              error={errors.taskname}
            />
            <Calender
              text="Assigned Date"
              name="assigneddate"
              value={values.assigneddate}
              onChange={handleInputChange}
              error={errors.assigneddate}
            />
            <Calender
              text="Due Date"
              name="duedate"
              value={values.duedate}
              onChange={handleInputChange}
              error={errors.duedate}
            />
            {/* </Box> */}

            <Box sx={{ pt: "2%", display: "flex", justifyContent: "center" }}>
              <Btn text="Submit" click={handlesubmit} />
            </Box>
          </Box>
        </form>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "flex-end", m: "5%" }}>
        <Btn text="Back" click={() => navigate(-1)} />
      </Box>
    </>
  );
}
