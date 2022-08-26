import React from "react";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Textfield from "./Reusablecomponents/Textfield";
import Calender from "./Reusablecomponents/Calender";
import Btn from "./Reusablecomponents/Btn";
import { FormHelperText } from "@mui/material";
import useForm from "./Validation/useForm";
import { getBranchtype, getDepartmentname, getPosition } from "./Dropdowndata/getDepartmentname";
import Dropdownlist from "./Reusablecomponents/Dropdownlist";
const initialFvalues = {
  position: "",
  department: "",
  branch: "",
  package: "",
  jobtype: "",
  doj: "",
};
function JobDetails() {
  const validate = () => {
    let temp = {};
    temp.position = values.position ? "" : "This field is required";
    temp.department = values.department ? "" : "This field is required";
    temp.branch = values.branch ? "" : "This field is required";
    temp.package = values.package ? "" : "This field is required";
    temp.jobtype = values.jobtype ? "" : "This field is required";
    temp.doj = values.doj ? "" : "This field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(values);
      window.alert("testing");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            width: "100%",
          }}
        >
          <Dropdownlist
          name="position"
          label="Position"
          value={values.position}
          handleInputChange={handleInputChange}
          options={getPosition()}
          error={errors.position}
        />
          <Dropdownlist
          name="departmentname"
          label="Department Name"
          value={values.departmentname}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.departmentname}
        />
          <Textfield
            label="Branch"
            name="branch"
            value={values.branch}
            error={errors.branch}
            onChange={handleInputChange}
          />
          <Textfield
            label="Package"
            name="package"
            value={values.package}
            error={errors.package}
            onChange={handleInputChange}
          />
          <Dropdownlist
            name="jobtype"
            label="type"
            value={values.jobtype}
            handleInputChange={handleInputChange}
            options={getBranchtype()}
            error={errors.jobtype}
          />

          <Calender
            text="Date Of Joining"
            name="doj"
            value={values.doj}
            error={errors.doj}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", m: "1%" }}>
          <Btn text="Save" type="submit" />
        </Box>
      </form>
    </div>
  );
}

export default JobDetails;
