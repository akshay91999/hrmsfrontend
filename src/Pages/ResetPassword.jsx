import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Btn from "../Components/Reusablecomponents/Btn";
import Textfield from "../Components/Reusablecomponents/Textfield";
import useForm from "../Components/Validation/useForm";

const initialFvalues = {
  newpassword: "",
  confirmpassword: "",
};

function ResetPassword() {
  const { values,setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
    const validate=()=>{
      let temp={}
      temp.newpassword=values.newpassword.length>5?"":"password length need atleast 6 characters"
      temp.confirmpassword=values.confirmpassword.length>5?"":"password length need atleast 6 characters"
      setErrors({...temp})
      return Object.values(temp).every((x)=>x==="")

    }
    const handlesubmit=()=>{
      if(validate()){
        if(values.newpassword==values.confirmpassword){
        window.alert("password successfully reseted")
      }
      else{
        window.alert("mismatch in your password entered")
      }
      }
    }
    const handleclear=()=>{
      setValues({
        newpassword:"",
        confirmpassword:""
      }
      )
    }
  return (
    <>
    <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", mt: "3%" }}
      >
        Reset Password
      </Typography>
    <Box  sx={{  display: "flex",
          justifyContent:'center',
          alignItems: "center",
          mt:"10vh"
          }}>
      <Card
        sx={{
          width: "70%",
          p: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Textfield
            label="New Password"
            name="newpassword"
            value={values.newpassword}
            onChange={handleInputChange}
            error={errors.newpassword}
            type="password"
          />
          <Textfield
            label="Confirm Password"
            name="confirmpassword"
            value={values.confirmpassword}
            onChange={handleInputChange}
            error={errors.confirmpassword}
            type="password"
          />
        </Box>
        <Box sx={{ pt: "3%" }}>
        <Box sx={{ display:'flex',justifyContent:'flex-end',gap: 2,}}>
        <Btn text="SUBMIT" click={handlesubmit}/>
        <Btn text='CANCEL' click={handleclear}/>
        </Box>
      </Box>
      </Card>
      </Box>
    </>
  );
}

export default ResetPassword;
