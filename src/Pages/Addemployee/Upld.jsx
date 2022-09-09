import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Upload from "../../Components/Upload";
import Btn from "../../Components/Reusablecomponents/Btn";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function Upld() {
  const params=useParams();
  console.log(params)

  const [file,selectedFile]=useState(null)
  
  // for setting response message 
  const [photo,setPhoto]=useState(null)
  const [cv,setCv]=useState(null)

  let navigate = useNavigate();

  const handlefilechange = (e) => {
    selectedFile(e.target.files[0])
  };
  console.log(file); 

  const nextButton=()=>{
    console.log(photo)
    console.log(cv)
   if(photo==="success" && cv==="success"){
      navigate("/academic/"+params.basicId);
    }
  }
  const handlephotoupload=(e)=>{
    e.preventDefault();
    if(file.type!="image/jpg" && file.type!="image/jpeg" && file.type!="image/png"){
      window.alert("File does not support. You must use .png or .jpg")
      return(false)
    } 
    else if(file.size>1000000){
      window.alert("Please upload a file smaller than 1mb")
      return(false)
    }
    else{
      const formData=new FormData()
      formData.append("document",file)
      formData.append("doc_type",'photo')
      axios.post("http://localhost:5000/upload/"+params.basicId,formData,{
        headers:{"Content-Type":"application/json"},
      })
      .then(function(response){
        console.log(response);
        setPhoto(response.data.message)
        if(response.data.message==="success"){
          window.alert("successfully uploaded")
        }
        else{
          window.alert(response.data.message)
        }
        
      })
      .catch(function(error){
        console.log(error)
      })
  }
  }

  const handlecvupload=(e)=>{
    e.preventDefault();
    if(file.type!="application/pdf"){
      window.alert("File does not support You must use pdf")
      return(false)
    } 
    else if(file.size>1000000){
      window.alert("Please upload a file smaller than 1mb")
      return(false)
    }
    else{
      const formData=new FormData()
      formData.append("document",file)
      formData.append("doc_type","cv")
      axios.post("http://localhost:5000/upload/"+params.basicId,formData,{
        headers:{"Content-Type":"application/json"},
      })
      .then(function(response){
        console.log(response);
        setCv(response.data.message)
        if(response.data.message==="success"){
          window.alert("successfully uploaded")
        }
        else{
          window.alert(response.data.message)
        }
        
      })
      .catch(function(error){
        console.log(error)
      })
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
      <fieldset style={{ margin:'1%' }}>
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
        <Upload text="Upload photo" onChange={handlefilechange} onSubmit={handlephotoupload} />
        <Upload text="Upload CV" onChange={handlefilechange} onSubmit={handlecvupload}/>
      </fieldset>
      {/* <Box sx={{ p: "2%" }}>
        <Btn text="Save" />
      </Box> */}
      <Box sx={{ p: "1%" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Btn text="Back" click={() => navigate(-1)} />
          <Btn
            text="Next"
            click={nextButton}
          />
        </Box>
      </Box>
    </>
  );
}

export default Upld;
