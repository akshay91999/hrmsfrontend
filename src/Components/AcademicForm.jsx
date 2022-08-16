import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Textfield from "./Reusablecomponents/Textfield";
import Calender from "./Reusablecomponents/Calender";
import Box from "@mui/material/Box";
import { useState } from "react";
import Btn from "./Reusablecomponents/Btn";
import useForm from "./Validation/useForm";
import { FormHelperText } from "@mui/material";
import { getBranchid, getBranchtype, getCourseid, getMarkid } from "./Dropdowndata/getDepartmentname";
import Dropdownlist from "./Reusablecomponents/Dropdownlist";

const initialFvalues = {
  school: "",
  board: "",
  coursesid: "",
  branchid: "",
  coursetype: "",
  score: "",
  markid: "",
  durtnfrm: "",
  durtnto: "",
};

function AcademicForm() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);

  const validate = () => {
    let temp = {};
    temp.school = values.school ? "" : "This field is required";
    temp.board = values.board ? "" : "This field is required";
    temp.coursesid = values.coursesid.length !== 0 ? "" : "This field is required";
    temp.score = values.score ? "" : "This field is required";
    temp.durtnfrm = values.durtnfrm ? "" : "This field is required";
    temp.durtnto = values.durtnfrm ? "" : "This field is required";
    temp.branchid = values.branchid ? "" : "this field is required";
    temp.coursetype = values.coursetype ? "" : "this field is required";
    temp.markid = values.markid ? "" : "this field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handlesubmit = () => {
    if (validate()) {
      // logging values
      setAdd(true);
      console.log(values)
      window.alert("successfully submited");
    }
  };

  const [add, setAdd] = useState(false);

  // const addfield = () => {
  //   setAdd(true);
  // };
  const removefield = () => {
    setAdd(false);
  };
  return (
    <>
    <form>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr" },
          gap: 2,
          width: "100%",
        }}
      >
        <Textfield sx={{}} label="School/Institution" name="school" id="scl"  value={values.school} error={errors.school} onChange={handleInputChange}/>
        <Textfield label="Board/University" name="board" id="scl"  value={values.board} error={errors.board} onChange={handleInputChange} />
        <Dropdownlist
          name="courseid"
          label="course"
          value={values.courseid}
          handleInputChange={handleInputChange}
          options={getCourseid()}
          error={errors.courseid}
        />
       
       <Dropdownlist
          name="branchid"
          label="branch"
          value={values.branchid}
          handleInputChange={handleInputChange}
          options={getBranchid()}
          error={errors.branchid}
        />
       <Dropdownlist
          name="coursetype"
          label="type"
          value={values.coursetype}
          handleInputChange={handleInputChange}
          options={getBranchtype()}
          error={errors.getBranchtype}
        />
        
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            // mt: "2%",
          }}
        >
          <Textfield label="Score"  name="score" id="score" value={values.score} error={errors.school} onChange={handleInputChange} />
          <Dropdownlist
          name="markid"
          label="type"
          value={values.markid}
          handleInputChange={handleInputChange}
          options={getMarkid()}
          error={errors.markid}
        />
        </Box>
        <Calender text=" Duration From" name="durtnfrm" value={values.durtnfrm} onChange={handleInputChange} error={errors.durtnfrm}/>
        <Calender text="Duration To" name="durtnto" value={values.durtnto} onChange={handleInputChange} error={errors.durtnto}/>
        <input type="file" />
      </Box>
      <Box sx={{ pt: "2%" }}>
      <Btn text="Save" click={handlesubmit}/>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", gap: 2, pb: "2%" }}
      >
        <Box sx={{ pt: "2%" }}>
          <Btn text="Add" click={handlesubmit} />
        </Box>
        <Box sx={{ pt: "2%" }}>
          <Btn text="Remove" click={removefield} />
        </Box>
      </Box>
      </form>


      {add ? <AcademicForm /> : null}
    </>
  );
}

export default AcademicForm;
