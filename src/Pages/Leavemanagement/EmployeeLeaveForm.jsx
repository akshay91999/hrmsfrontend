import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";
import useForm from "../../Components/Validation/useForm";
import { Box } from "@mui/system";
import Calender from "../../Components/Reusablecomponents/Calender";
import TextField from "@mui/material/TextField";
import Btn from "../../Components/Reusablecomponents/Btn";
import { Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
import { getDepartmentname } from "../../Components/Dropdowndata/getDepartmentname";
import Textfield from "../../Components/Reusablecomponents/Textfield";
const initialFvalues = {
  departmentid: "",
  leavefrom: "",
  numberofleave: "",
  leavetype: "paidleave",
  reasonleave: "",
  departmentname: "",
};
function EmployeeLeaveForm() {

    const regnum=/\-?\d*\.?\d{1,2}/

  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    let temp = {};
    temp.leavefrom = values.leavefrom ? "" : "This field is required";
    temp.numberofleave = regnum.test(values.numberofleave) ? "" : "Enter a valid number";
    temp.leavetype = values.leavetype ? "" : "This field is required";
    temp.reasonleave = values.reasonleave ? "" : "This field is required";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const handlesubmit = () => {
    // loging values
    console.log(values);
    if (validate()) {
      window.alert("successfully submited");
      //navigate("/Upload")
    }
  };
  return (
    <>
      <Typography variant="h6" align="center" gutterBottom component="div">
        LEAVE FORM
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr" },
          gap: 2,
          width: "100%",
          mt: "2%",
          // textAlign: "center",
        }}
      >
        <Calender
          text="Leave From"
          name="leavefrom"
          value={values.leavefrom}
          errors={errors}
          onChange={handleInputChange}
          error={errors.leavefrom}
        />

        <Textfield
          label="Number Of Leave"
          name="numberofleave"
          id="scl"
          value={values.numberofleave}
          error={errors.numberofleave}
          onChange={handleInputChange}
        />

        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="leavetype"
          value={values.leavetype}
          onChange={handleInputChange}
        >
          <FormControlLabel
            size="small"
            value="paidleave"
            control={<Radio />}
            label="Paid Leave"
          />
          <FormControlLabel
            size="small"
            value="unpaidleave"
            control={<Radio />}
            label="Unpaid Leave"
          />
        </RadioGroup>
      </Box>
      <Box sx={{ alignContent: "center" }}>
        <TextField
          sx={{
            width: "95%",
            mt: "1%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#1565C0",
              },
              "&:hover fieldset": {
                borderColor: "brown",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1565C0",
              },
            },
          }}
          name="reasonleave"
          value={values.reasonleave}
          onChange={handleInputChange}
          label="Reason"
          multiline
          rows={4}
          {...(errors.reasonleave && {
            error: true,
            helperText: errors.reasonleave,
          })}
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: "1%" }}
      >
        <Btn text="Submit" click={handlesubmit} />
      </Box>
    </>
  );
}

export default EmployeeLeaveForm;
