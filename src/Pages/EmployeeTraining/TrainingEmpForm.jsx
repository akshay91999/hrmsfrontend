import { Box, Typography } from "@mui/material";
import React from "react";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
import useForm from "../../Components/Validation/useForm";
import { getDepartmentname } from "../../Components/Dropdowndata/getDepartmentname";
import Btn from "../../Components/Reusablecomponents/Btn";
import Calender from "../../Components/Reusablecomponents/Calender";
const initialFvalues = {
  trainingname: "",
  Calender: "",
  timeschedule: ""
};

function TrainingEmpForm() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    const temp = {};
    temp.trainingname = values.trainingname
      ? ""
      : "please select a Training";
    temp.Calender = values.Calender ? "" : "please enter a date";
    temp.timeschedule = values.timeschedule
      ? ""
      : "required field";

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
        Training Request
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
          name="trainingname"
          label="Training Name"
          value={values.trainingname}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.trainingname}
        />
        <Calender
          text="Calender"
          name="Calender"
          value={values.Calender}
          onChange={handleInputChange}
          error={errors.Calender}
        />
         <Dropdownlist
          name="timeschedule"
          label="Time Schedule"
          value={values.timeschedule}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.timeschedule}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", m: "2%" }}>
        <Btn text="Submit" click={handlesubmit} />
      </Box>
    </>
  );
}

export default TrainingEmpForm;