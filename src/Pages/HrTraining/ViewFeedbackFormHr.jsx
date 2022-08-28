import { Box, Typography } from "@mui/material";
import React from "react";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
import useForm from "../../Components/Validation/useForm";
import { getDepartmentname } from "../../Components/Dropdowndata/getDepartmentname";
import FeedbackList from "../../Components/FeedbackList";
import Calender from "../../Components/Reusablecomponents/Calender";

const initialFvalues = {
  calender:"",
  department:"",
  trainingname: "",
  feedbacklist: ""
};

function ViewFeedbackFormHr() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    const temp = {};
    temp.department = values.department? "" : "please select a department";
    temp.trainingname = values.trainingname ? "" : "please select a Training";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        View Feedback
      </Typography>
      {/* <Typography variant="h6" align="center" sx={{ pb: "2%" }}>EmployeeId : 535767</Typography> */}
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 2,
          width: "100%",
         
        
        }}
      >
        <Calender
          text="calender"
          name="calender"
          value={values.calender}
          onChange={handleInputChange}
        //   error={errors.calender}
        />
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
        //   error={errors.trainingname}
        />
        
        
        <Typography variant="h6" align="center" sx={{ pb: "2%" }}>Trainer : Dr.Sreekumar Upadyaya</Typography>

        <FeedbackList
        name="feedbacklist"
        // label="feedbacklist"
        value={values.feedbacklist}
        handleInputChange={handleInputChange}
        // options={getDepartmentname()}
        // error={errors.feedbacklist}
        />
      </Box> 
    </>
  );
}

export default ViewFeedbackFormHr;
