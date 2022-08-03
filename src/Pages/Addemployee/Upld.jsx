import { Box, Typography } from "@mui/material";
import React from "react";
import Upload from "../../Components/Upload";
import Btn from "../../Components/Reusablecomponents/Btn";
import {useNavigate} from 'react-router-dom'
function Upld() {
  let navigate=useNavigate()
  return (
    <>
    <Typography variant='h4' align='center' sx={{ color:'#1565C0',mt:'1%'}} >File Uploads</Typography>
      <fieldset>
        <legend>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ color: "#1565C0" }}
          >
            File Uploads
          </Typography>
        </legend>
      <Upload text="Upload photo" />
      <Upload text="Upload CV" />
      </fieldset>
      <Box sx={{ p: "2%" }}>
            <Btn text="Save"/>
      </Box>
      <Box sx={{ p: "1%" }}>
        <Box sx={{ display:'flex',justifyContent:'flex-end',gap: 2,}}>
        <Btn text="Back" click={()=>navigate(-1)}/>
        <Btn text='Next'click={()=>{navigate("/academic")}}/>
        </Box>
      </Box>
    </>
  );
}

export default Upld;
