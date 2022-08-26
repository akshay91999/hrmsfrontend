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
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
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
            // error={errors.firstname}
          />
          <Textfield
            label="Confirm Password"
            name="confirmpassword"
            value={values.confirmpassword}
            onChange={handleInputChange}
            // error={errors.lastname}
          />
        </Box>
        <Box sx={{ pt: "3%" }}>
        <Box sx={{ display:'flex',justifyContent:'flex-end',gap: 2,}}>
        <Btn text="SUBMIT"/>
        <Btn text='CANCEL'/>
        </Box>
      </Box>
      </Card>
      </Box>
    </>
  );
}

export default ResetPassword;
