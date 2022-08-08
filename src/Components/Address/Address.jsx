import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Textfeild from "../Reusablecomponents/Textfield";

function Address(props) {
  const {
    address,
    state,
    country,
    pincode,
    values,
    errors,
    handleInputChange,
  } = props;
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
            {props.text}
          </Typography>
        </legend>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            width: "100%",
            textAlign: "center",
            pt: "2%",
            pb: "2%",
          }}
        >
  
          <Textfeild
            label="address"
            name={address}
            value={values[address]}
            onChange={handleInputChange}
            error={errors[address]}
          />
          <Textfeild
            label="State"
            name={state}
            value={values[state]}
            onChange={handleInputChange}
            error={errors[state]}
          />
          <Textfeild
            label="Country"
            name={props.country}
            value={values[country]}
            onChange={handleInputChange}
            error={errors[country]}
          />
          <Textfeild
            label="PinCode"
            name={props.pincode}
            value={values[pincode]}
            onChange={handleInputChange}
            error={errors[pincode]}
          />
        </Box>
      </fieldset>
    </>
  );
}

export default Address;
