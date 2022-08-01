import React from "react";
import Textfield from "../Components/Textfield";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Calender from "../Components/Calender";
import Btn from "../Components/Btn";
import { Typography } from "@mui/material";
import useForm from "../Components/useForm";
import {FormHelperText} from "@mui/material";
const initialFvalues = {
  employeeid: "",
  employeetype: "",
  durationfrom: "",
  durationto: "",
  designation: "",
  annualsalary: "",
};

function Expdtl() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);

  const [open, setOpen] = useState(false);
  const addNew = () => {
    setOpen(true);
  };

  const removeNew = () => {
    setOpen(false);
  };

  const validate = () => {
    let temp = {};
    temp.employeeid = values.employeeid ? "" : "employeeid is required";
    temp.employeetype = values.employeetype ? "" : "employeetype is required";
    temp.durationfrom = values.durationfrom ? "" : "duration from is required";
    temp.durationto = values.durationto ? "" : "duration to is required";
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
      <form>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            // width: "100%",
            // textAlign: "center"
          }}
        >
          <Textfield
            label="Employee ID"
            id="emp-id"
            name="employeeid"
            value={values.employeeid}
            onChange={handleInputChange}
            error={errors.employeeid}
          />
          <FormControl 
            sx={{
              // mt: 1,
              // mb: 1,
              width: "90%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "green",
                },
                "&:hover fieldset": {
                  borderColor: "brown",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "green",
                },
              },
            }}
            size="small"
            {...(errors.employeetype && {error:true})}
          >
            <InputLabel id="demo-select-small">Employee Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={values.employeetype}
              label="employee type"
              name="employeetype"
              onChange={handleInputChange}
              
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"pt"}>Part time</MenuItem>
              <MenuItem value={"ft"}>Full time</MenuItem>
            </Select>
            {errors.employeetype &&<FormHelperText>{errors.employeetype}</FormHelperText>}

          </FormControl>
          <Calender text="Duration From" name="durationfrom" value={values.durationfrom} onChange={handleInputChange} error={errors.durationfrom}/>
          <Calender text="Duration To" name="durationto" value={values.durationto} onChange={handleInputChange} error={errors.durationto} />
          {/* </Box> */}
          <Textfield
            label="Designation"
            id="designation"
            name="designation"
            value={values.designation}
            onChange={handleInputChange}
          />
          <Textfield
            label="Annual Salary"
            id="annual-salary"
            name="annualsalary"
            value={values.annualsalary}
            onChange={handleInputChange}
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr" },
            }}
          >
            <label>
              <Typography variant="h6">Experience Certificate</Typography>
            </label>
            <input type="file" />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr" },
            }}
          >
            <label>
              <Typography variant="h6">Contact Certificate</Typography>
            </label>
            <input type="file" />
          </Box>
          <Box sx={{ pt: "2%" }}>
            <Btn text="Save" click={handlesubmit} />
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: "1%" }}
        >
          <Box sx={{ pt: "2%" }}>
            <Btn text="Add" click={addNew} />
          </Box>
          <Box sx={{ pt: "2%" }}>
            <Btn text="Remove" click={removeNew} />
          </Box>
        </Box>
      </form>

      {open ? <Expdtl /> : null}
    </>
  );
}
export default Expdtl;
