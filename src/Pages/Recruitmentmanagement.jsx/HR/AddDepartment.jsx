import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Btn from "../../../Components/Reusablecomponents/Btn";
import Textfield from "../../../Components/Reusablecomponents/Textfield";
import useForm from "../../../Components/Validation/useForm";
import axios from "axios";

const initialFvalues = {
  department: "",
  position:"",
};

function AddDepartment() {
  const params = useParams();
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const navigate = useNavigate();

  const validate = () => {
    let temp = {};
    temp.department = values.department ? "" : "please enter a department";
    temp.position = values.position ? "" : "please enter a department";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const handlesubmit = () => {
    if (validate()) {
      axios.post(
        "http://localhost:5000/depart",
        { departmentname: values.department,designation:values.position },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(function(response){
        console.log(response)
        window.alert("successfully updated");

      }).catch(function(error){
        console.log(error)
      })
      // console.log(values);
    
    }
  };
  return (
    <>
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Add New Department
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 2,
          width: "100%",
          pl: "5%",
        }}
      >
        <Textfield
          label="Department"
          name="department"
          value={values.department}
          onChange={handleInputChange}
          error={errors.department}
        />
        <Textfield
          label="Position"
          name="position"
          value={values.position}
          onChange={handleInputChange}
          error={errors.position}
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: "1%" }}
      >
        <Btn text="Submit" click={handlesubmit} />
        <Btn
          text="Back"
          click={() => {
            navigate("/dashboard");
          }}
        />
      </Box>
      </Paper>
    </>
  );
}

export default AddDepartment;
