import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { getDepartmentname,getPosition,} from "../../../Components/Dropdowndata/getDepartmentname";
import Btn from "../../../Components/Reusablecomponents/Btn";
import Dropdownlist from "../../../Components/Reusablecomponents/Dropdownlist";
import Textfield from "../../../Components/Reusablecomponents/Textfield";
import Upload from "../../../Components/Upload";
import useForm from "../../../Components/Validation/useForm";

const initialFvalues = {
  candidatename: "",
  departmentname: "",
  position: "",
  email: "",
  mobile: "",
  highestqualification: "",
  yoe: "",
};

function AddCandidate() {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const regex = /\S+@\S+\.\S+/;
  const regmob = /(0|91)?[7-9][0-9]{9}/;

  const validate = () => {
    const temp = {};
    temp.candidatename = values.candidatename ? "" : "Enter Your Name";
    temp.departmentname = values.departmentname? "": "please select a department";
    temp.position = values.position ? "" : "please enter a department";
    temp.email = regex.test(values.email) ? "" : "email is not valid";
    temp.mobile = regmob.test(values.mobile)? "": "contactnumber requires minimum 9 numbers";
    temp.highestqualification = values.highestqualification? "": "please enter qualification";
    temp.yoe = values.yoe? "": "please enter the year of experience number";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const handlesubmit = () => {
    console.log(errors)
    if (validate()) {
      window.alert('successfully submited')
    }
  };
  const handleclear = () => {
    setValues({
      candidatename:"",
      departmentname: "",
      position: "",
      email:"",
      mobile:"",
      highestqualification:"",
      yoe: "",
      
    });
  };
  return (
    <>
    <Paper elevation={4} sx={{ m: "1%", p: "1%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Add Candidate
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
        <Textfield
          label="Candidate Name"
          name="candidatename"
          value={values.candidatename}
          onChange={handleInputChange}
          error={errors.candidatename}
        />
        <Dropdownlist
          name="departmentname"
          label="Department Name"
          value={values.departmentname}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.departmentname}
        />
        <Dropdownlist
          name="position"
          label="Position"
          value={values.position}
          handleInputChange={handleInputChange}
          options={getPosition()}
          error={errors.position}
        />
        <Textfield
          label="Email Id"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <Textfield
          label="Mobile"
          name="mobile"
          value={values.mobile}
          onChange={handleInputChange}
          error={errors.mobile}
        />
        <Textfield
          label="Year Of Experience"
          name="yoe"
          value={values.yoe}
          onChange={handleInputChange}
          error={errors.yoe}
        />
        <Box sx={{ width: "90%" }}>
          <fieldset style={{ borderColor: "#1565C0" }}>
            <legend>
              <Typography variant="h6" gutterBottom component="div">
                Upload CV
              </Typography>
            </legend>
            Upload a file:
            <input type="file" style={{ marginLeft: "1%" }} />
          </fieldset>
        </Box>
        </Box>
        <Box sx={{ p: "1%" }}>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2}}
        >
          <Btn text="Submit" click={handlesubmit} />
          <Btn text="Clear" click={handleclear} />
        </Box>
        </Box>

     
      </Paper>
    </>
  );
}

export default AddCandidate;
