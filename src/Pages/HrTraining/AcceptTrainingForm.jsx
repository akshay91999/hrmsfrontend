import { Box, Typography } from "@mui/material";
import React from "react";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
import useForm from "../../Components/Validation/useForm";
import { getDepartmentname } from "../../Components/Dropdowndata/getDepartmentname"; 
import Btn from "../../Components/Reusablecomponents/Btn";
// import Calendar from "../Reusable/Calendar";

const initialFvalues = {
  department:"",
  trainingname: "",
  employeename: "",
  timeschedule: "",
  trainer:""
};

function AllotingTrainerForm() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    const temp = {};
    temp.department = values.department ?  "" : "please enter a department";
    temp.trainingname = values.trainingname ? "" : "please select a Training";
    //   temp.employeename = values.employeename
    //   ? ""
    //   : "please select a Training";
      temp.trainer = values.trainer ? "" : "please select a Trainer";
    
    temp.timeschedule = values.timeschedule ? "" : "please select Time";

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
        Assign Trainers
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
         
        <Dropdownlist
          name="department"
          label="department"
          value={values.department}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.department}
        />
        <Dropdownlist
          name="trainingname"
          label="trainingname"
          value={values.trainingname}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.trainingname}
        />
        <Dropdownlist
          name="timeschedule"
          label="timeschedule"
          value={values.timeschedule}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.timeschedule}
        />
         <label>
              <Typography variant="h6">EmployeeList : Employee name</Typography>
        </label>
        <label>
              <Typography variant="h6">Allotted Trainer : Trainer name</Typography>
        </label>
      </Box>
      {/* <Box sx={{ display: "flex", justifyContent: "flex-end", m: "2%" }}>
        <Btn text="Submit" click={handlesubmit} />
      </Box> */}
      <Box sx={{ p: "1%" }}>
        <Box sx={{ display:'flex',justifyContent:'flex-end',gap: 2,}}>
        <Btn text="Accept"/>
        <Btn text='Reject'/>
        </Box>
      </Box>
    </>
  );
}

export default AllotingTrainerForm;