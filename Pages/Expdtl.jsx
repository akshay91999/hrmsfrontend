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


const initialFvalues={
    employeeid :'',
    employeetype :'',
    durationfrom :new Date(),
    durationto :new Date(),
    designation :'',
    annualsalary  :'',
}

function Expdtl() {
    // const [values,setValues]=useState(initialFvalues)
    // const handleInputChange=(e)=>{
    //   const{ name,value }=e.target
    //   console.log(values)
    //   setValues({
    //     ...values,
    //     [name] : value
    //   })
    // }
     const{values,setValues,handleInputChange}=useForm(initialFvalues)
    // const{
    //     values,
    //     handleInputChange
    // }=useForm(initialFvalues)

   

  
  const [open, setOpen] = useState(false);
  const addNew = () => {
    setOpen(true);
  };

  const removeNew = () => {
    setOpen(false);
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
        <Textfield label="Employee ID" id="emp-id" name="employeeid" value={values.employeeid} onChange={handleInputChange}/>
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
        </FormControl>
        <Calender text="Duration From" />
        <Calender text="Duration To" />
        {/* </Box> */}
        <Textfield label="Designation" id="designation" name="designation" value={values.designation} onChange={handleInputChange} />
        <Textfield label="Annual Salary" id="annual-salary" name="annualsalary" value={values.annualsalary} onChange={handleInputChange} />
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
          <Btn text="Save" />
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
