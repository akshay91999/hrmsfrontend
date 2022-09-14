import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Address from "./Address";
import { useState } from "react";

function AddressCalling(props) {
  const {values,errors,setErrors,handleInputChange}=props
  return (
    <>
      <Address
        text="Permanant Address"
        address="e_address"
        state="state"
        country="country"
        pincode="pincode"
        values={values}
        errors={errors}
        setErrors={setErrors}
        handleInputChange={handleInputChange}
        
      />
      <Typography variant="h6">
        Are the permanent and current address same?
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="ispermanantequal"
          value={values.ispermanantequal}
          onChange={handleInputChange}

        >
          <FormControlLabel
            value="Yes"
            id="check"
            control={<Radio />}
            label="Yes"
            
          />
          <FormControlLabel
            value="No"
            control={<Radio />}
            label="No"
           
          />
        </RadioGroup>
      </Typography>
      {values.ispermanantequal==="Yes" ? null : (
        <Address
          text="Current Address"
          address="currentaddress"
          state="currentstate"
          country="currentcountry"
          pincode="currentpincode"
          values={values}
          errors={errors}
          setErrors={setErrors}
          handleInputChange={handleInputChange}
        />
      )}
    </>
  );
}

export default AddressCalling;
