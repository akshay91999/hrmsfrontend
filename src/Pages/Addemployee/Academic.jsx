import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Btn from "../../Components/Reusablecomponents/Btn";
import AcademicForm from "../../Components/AcademicForm";
import {useNavigate, useParams} from 'react-router-dom'


export default function Academic() {
  const params=useParams()
  console.log(params)

  let navigate=useNavigate()
  return (
    <>
    <Typography variant='h4' align='center' sx={{ color:'#1565C0',mt:'1%'}} >Academic Details</Typography>
      <fieldset style={{ margin:'1%' }}>
        <legend>
          <Typography variant="h6" gutterBottom component="div">
            Academic Qualifications(Highest Qualification First)
          </Typography>
        </legend>
        {/* calling Academic form */}
        <AcademicForm/>
       
      </fieldset>
      <Box sx={{ p: "1%" }}>
        <Box sx={{ display:'flex',justifyContent:'flex-end',gap: 2,}}>
        <Btn text="Back" click={()=>navigate(-1)}/>
        <Btn text='Next'click={()=>{navigate("/experience/"+params.basicId)}}/>
        </Box>
      </Box>
    </>
  );
}
