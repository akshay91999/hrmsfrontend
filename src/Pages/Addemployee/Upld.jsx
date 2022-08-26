import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Upload from "../../Components/Upload";
import Btn from "../../Components/Reusablecomponents/Btn";
import { useNavigate, useParams } from "react-router-dom";
function Upld() {
  const params=useParams();
  console.log(params)
  let file=null
  let navigate = useNavigate();
  const handlefilechange = (e) => {
    file=e.target.files[0];
    console.log(file); 
  };
  const handlefileupload=()=>{
    if(file.type!="image/jpg" && file.type!="image/jpeg" && file.type!="image/png"){
      window.alert("File does not support. You must use .png or .jpg")
      return(false)
    } 
    else if(file.size>100000){
      window.alert("Please upload a file smaller than 1mb")
      return(false)
    }
    else{
    window.alert("uploaded")
  }
  }
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", mt: "1%" }}
      >
        File Uploads
      </Typography>
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
        <Upload text="Upload photo" onChange={handlefilechange} onSubmit={handlefileupload} />
        <Upload text="Upload CV" onChange={handlefilechange} onSubmit={handlefileupload}/>
      </fieldset>
      {/* <Box sx={{ p: "2%" }}>
        <Btn text="Save" />
      </Box> */}
      <Box sx={{ p: "1%" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Btn text="Back" click={() => navigate(-1)} />
          <Btn
            text="Next"
            click={() => {
              navigate("/academic");
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Upld;
