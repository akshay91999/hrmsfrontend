import React from "react";
import { useNavigate,useParams } from "react-router-dom";
import Softskill from "../../Components/Softskill";
import Btn from "../../Components/Reusablecomponents/Btn";
import { Typography } from "@mui/material";
import Hardskill from "../../Components/Hardskill";
import {Box} from "@mui/material";
import useForm from "../../Components/Validation/useForm";
import axios from "axios";


const initialFvalues={
  softskill:"",
  hardskill:""
}


function Skills() {
  const params=useParams();

  const {values,setErrors,handleInputChange}=useForm(initialFvalues)
    let navigate=useNavigate()


    const validate = () => {
      let temp = {};
      temp.hardskill = values.hardskill ? "" : "hardskill is required";
      temp.softskill = values.softskill ? "" : "softskill is required";
     

      setErrors({ ...temp });
      return Object.values(temp).every((x) => x === "");
    };
  

    const user = {
      hardskills: values.hardskill,
      softskills: values.softskill,
    
  

    };
    const handlesubmit = () => {   
        // logging values
        // console.log(values)
        // window.alert("successfully submited");
        console.log(user);
        if (validate()) {
          axios
            .post("http://localhost:5000/skill/"+params.basicId, user, {
              headers: { "Content-Type": "application/json" },
            })
            .then(function (response) {
              console.log(response);
                window.alert("successfully submited");
            })
            .catch(function (error) {
              console.log(error);
            });
        }
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
            Skills
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
              navigate("/jobdetails/"+params.basicId);
            }}
          />
        </Box>
      </fieldset>
    </>
  );
}

export default Skills;