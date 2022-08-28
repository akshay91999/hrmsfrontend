import React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import Textfield from "../../Components/Reusablecomponents/Textfield";
import Calender from "../../Components/Reusablecomponents/Calender";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Btn from "../../Components/Reusablecomponents/Btn";
import useForm from "../../Components/Validation/useForm";
// import { FormHelperText } from "@mui/material";

const initialFvalues = {
  trainingname: "",
  trainer: "",
  timeschedular: "",
  calender: "",
};

function AddTrainerTrainingTimeFormHod() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);

  const validate = () => {
    let temp = {};
    temp.trainingname = values.trainingname ? "" : "This field is required";
    temp.trainer = values.trainer ? "" : "This field is required";
    temp.timeschedular = values.timeschedular ? "" : "This field is required";
    temp.calender = values.calender ? "" : "This field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handlesubmit = () => {
  if (validate()) {
    window.alert("successfully added");
  }
};

const [AddedList, setAdd] = useState(false);

const addfield = () => {
  setAdd(true);
};
// const removefield = () => {
//   setAdd(false);
// };
return (
  <>
  <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Add Training Details
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
        <Textfield label="trainingname" name="trainingname" id="trainingname" value={values.trainingname} error={errors.trainingname} onChange={handleInputChange} />
        <Textfield label="trainer" name="trainer" id="trainer" value={values.trainer} error={errors.trainer} onChange={handleInputChange} />       
        <Textfield label="timeschedular" name="timeschedular" id="timeschedular" value={values.timeschedular} error={errors.trainingname} onChange={handleInputChange} />


        <Calender text=" date" name="calender" value={values.calender} onChange={handleInputChange} error={errors.calender} />

         
          {/* <Box sx={{ pt: "2%" }}>
          <Btn text="Remove" click={removefield} />
        </Box> */}
        </Box>
        <Box sx={{ pt: "2%" , display: "flex", justifyContent: "flex-end", gap: 2, pb: "2%",}}>
            <Btn text="Add" click={handlesubmit} />
            
            <Btn text="AddedList" click={addfield}/>
      
          </Box>
      {/* </Box> */}


    {AddedList ? <AddTrainerTrainingTimeFormHod /> : null}
  </>
);

      }
export default AddTrainerTrainingTimeFormHod;

