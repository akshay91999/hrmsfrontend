import React from "react";
import { useNavigate } from "react-router-dom";
import Softskill from "../../Components/Softskill";
import Btn from "../../Components/Reusablecomponents/Btn";
import { Typography } from "@mui/material";
import Hardskill from "../../Components/Hardskill";
import {Box} from "@mui/material";
import useForm from "../../Components/Validation/useForm";


const initialFvalues={
  softskill:"",
  hardskill:""
}


function Skills() {
  const {values,handleInputChange}=useForm(initialFvalues)
    let navigate=useNavigate()
    const handlesubmit = () => {   
        // logging values
        console.log(values)
        window.alert("successfully submited");
    };
  return (
    <>
      <fieldset>
        <legend>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ color: "#1565C0" }}
          >
            skills
          </Typography>
        </legend>
       
          <Softskill name="softskill" values={values} handleInputChange={handleInputChange}/>
       
          <Hardskill name="hardskill" values={values} handleInputChange={handleInputChange}/>

          <Box sx={{ p: "1%" }}><Btn text="Save" click={handlesubmit}/></Box>

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: "1%" }}
        >
          <Btn text="Back" click={() => navigate(-1)} />
          <Btn
            text="Next"
            click={() => {
              navigate("/jobdetails");
            }}
          />
        </Box>
      </fieldset>
    </>
  );
}

export default Skills;
