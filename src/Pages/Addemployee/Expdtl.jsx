import React from "react";
import Textfield from "../../Components/Reusablecomponents/Textfield";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Calender from "../../Components/Reusablecomponents/Calender";
import Btn from "../../Components/Reusablecomponents/Btn";
import { Typography } from "@mui/material";
import useForm from "../../Components/Validation/useForm";
import {FormHelperText} from "@mui/material";
import { getBranchtype } from "../../Components/Dropdowndata/getDepartmentname";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
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
         <Dropdownlist
          name="employeetype"
          label="type"
          value={values.employeetype}
          handleInputChange={handleInputChange}
          options={getBranchtype()}
          error={errors.employeetype}
        />
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
