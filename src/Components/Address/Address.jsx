import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Textfeild from "../Reusablecomponents/Textfield";
import Dropdownlisttitle from "../Reusablecomponents/DropdownlistTitle";
import { getCountry, getDepartmentname } from "../Dropdowndata/getDepartmentname";
import { useEffect } from "react";
import { useState } from "react";
import MultiLineTextfield from "../Reusablecomponents/MultiLineTextfield";

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
            pt: "2%",
            pb: "2%",
          }}
        >
  
          <MultiLineTextfield
            label="Address"
            name={address}
            value={values[address]}
            onChange={handleInputChange}
            error={errors[address]}
          />
          <Dropdownlisttitle
            name={props.country}
            label="Country"
            value={values[country]}
            handleInputChange={handleInputChange}
            options={getCountry()}
            error={errors[country]}
          />
         
          <Textfeild
            label="State"
            name={state}
            value={values[state]}
            onChange={handleInputChange}
            error={errors[state]}
          />
          {/* <Textfeild
            label="Country"
            name={props.country}
            value={values[country]}
            onChange={handleInputChange}
            error={errors[country]}
          /> */}
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
