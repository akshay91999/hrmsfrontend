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
  const { values, errors, setErrors, handleInputChange } =useForm(initialFvalues);

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
        <FormControl
          sx={{
            // mt: 1,
            // mb: 1,
            width: "90%",
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
          size="small"
          {...(errors.coursesid && {error:true})}
        >
          <InputLabel id="demo-select-small">courses</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={values.coursesid}
            label="courses"
            name="coursesid"
            onChange={handleInputChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"MCA"}>Master of Computer Application</MenuItem>
            <MenuItem value={"BCA"}>Bachelor of Computer Application</MenuItem>
            <MenuItem value={"Bsc"}>Bachelor of Science</MenuItem>
            <MenuItem value={"Msc"}>Master of Science</MenuItem>
          </Select>
          {errors.coursesid &&<FormHelperText>{errors.coursesid}</FormHelperText>}
        </FormControl>

        <FormControl
          sx={{
            // mt: 1,
            // mb: 1,
            width: "90%",
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
          size="small"
          {...(errors.branchid && {error:true})}
        >
          <InputLabel id="demo-select-small">Branch</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={values.branchid}
            label="Branch"
            name="branchid"
            onChange={handleInputChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"CS"}>Computer Science</MenuItem>
            <MenuItem value={"Ele"}>Electronics</MenuItem>
            <MenuItem value={"IT"}>Infotmation and Technology</MenuItem>
            <MenuItem value={"SE"}>Software Engineering</MenuItem>
          </Select>
          {errors.branchid && <FormHelperText>{errors.branchid}</FormHelperText>}
        </FormControl>

        <FormControl
          sx={{
            // mt: 1,
            // mb: 1,
            width: "90%",
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
          size="small"
          {...(errors.coursetype && {error:true})}
        >
          <InputLabel id="demo-select-small">Type</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={values.coursetype}
            label="Type"
            name="coursetype"
            onChange={handleInputChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"pt"}>Part time</MenuItem>
            <MenuItem value={"ft"}>Full time</MenuItem>
          </Select>
          {errors.coursetype && <FormHelperText>{errors.coursetype}</FormHelperText>}
        </FormControl>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            // mt: "2%",
          }}
        >
          <Textfield label="Score"  name="score" id="score" value={values.score} error={errors.school} onChange={handleInputChange} />
          <FormControl
            sx={{
              width: "80%",
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
            size="small"
            {...(errors.markid &&{error:true})}
          >
            <InputLabel id="demo-select-small"></InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={values.markid}
              label=""
              name="markid"
              onChange={handleInputChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"cgpa"}>CGPA</MenuItem>
              <MenuItem value={"per"}>%</MenuItem>
            </Select>
            {errors.markid && <FormHelperText>{errors.markid}</FormHelperText>}
          </FormControl>
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
