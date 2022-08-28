import { Box, Typography } from "@mui/material";
import React from "react";
// import Dropdownlist from "../Reusable/Dropdownlist";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
// import useForm from "../useForm";
import { getDepartmentname } from "../../Components/Dropdowndata/getDepartmentname";
import Btn from "../../Components/Reusablecomponents/Btn";
import Textarea from "../../Components/Reusablecomponents/Textarea";
// import useForm from '../../Components/Validation/useForm';
// import Calendar from "../Reusable/Calendar";
import useForm from "../../Components/Validation/useForm";

const initialFvalues = {
  empid:"",
  trainingdone: "",
  feedback: ""
};

function AllotingTrainerForm() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    const temp = {};
    // temp.empid = values.empid ?  "" : "please enter a employee id";
    temp.trainingdone = values.trainingdone ? "" : "please select a Training";

    //   temp.trainer = values.trainer ? "" : "please select a Trainer";
    
    temp.feedback = values.feedback ? "" : "please enter your feedback";

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
        Feedback
      </Typography>
      <Typography variant="h6" align="center" sx={{ pb: "2%" }}>EmployeeId : 535767</Typography>
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
        
              
       
        <Dropdownlist
          name="trainingdone"
          label="trainingdone"
          value={values.trainingdone}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.trainingdone}
        />
        <Textarea
         name="feedback"
         label="feedback"
         value={values.feedback}
         handleInputChange={handleInputChange}
         error={errors.feedback}
        
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", m: "2%" }}>
        <Btn text="Submit" click={handlesubmit} />
      </Box>
      {/* <Box sx={{ p: "1%" }}>
        <Box sx={{ display:'flex',justifyContent:'flex-end',gap: 2,}}>
        <Btn text="Accept"/>
        <Btn text='Reject'/>
        </Box>
      </Box> */}
    </>
  );
}

export default AllotingTrainerForm;