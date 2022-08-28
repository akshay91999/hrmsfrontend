import { Box, Typography } from "@mui/material";
import React from "react";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
import useForm from "../../Components/Validation/useForm";
import { getDepartmentname } from "../../Components/Dropdowndata/getDepartmentname";
// import Btn from "./Reusable/Btn";
// import Textarea from "./Reusable/Textarea";
import FeedbackList from "../../Components/FeedbackList";

import Calender from "../../Components/Reusablecomponents/Calender";

const initialFvalues = {
  calender:"",
  trainingname: "",
  feedbacklist: ""
};

function ViewFeedbackForm() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    const temp = {};
// //     // temp.calendar = values.calendar ?  "" : "please enter a employee id";
// //     temp.trainingname = values.trainingname ? "" : "please select a Training";

//     //   temp.trainer = values.trainer ? "" : "please select a Trainer";
    
//     // temp.feedbacklist = values.feedbacklist ? "" : "please enter your feedback";
    

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
//   const handlesubmit = () => {
//     if (validate()) {
//       window.alert("successfully updated");
//     }
//   };

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
        //   error={errors.calendar}
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


        {/* <Typography variant="h6" align="center" sx={{ pb: "2%" }}>Feedbacks</Typography>
        <Textarea
         name="feedback"
         label="feedback"
         value={values.feedback}
         handleInputChange={handleInputChange}
         error={errors.feedback} */}
        {/* //view feedback of employs with name and id
        /> */}
      </Box>
      {/* <Box sx={{ display: "flex", justifyContent: "flex-end", m: "2%" }}>
        <Btn text="Submit" click={handlesubmit} />
      </Box> */}
      {/* <Box sx={{ p: "1%" }}>
        <Box sx={{ display:'flex',justifyContent:'flex-end',gap: 2,}}>
        <Btn text="Accept"/>
        <Btn text='Reject'/>
        </Box>
      </Box> */}
    </>
  );
}

export default ViewFeedbackForm;
