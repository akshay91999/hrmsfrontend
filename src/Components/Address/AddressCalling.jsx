import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Address from "./Address";
import { useState } from "react";

function AddressCalling(props) {
  const {values,errors,setErrors,handleInputChange}=props
  const [check, setCheck] = useState(false);
  const Sameaddress = () => {
    setCheck(true);
  };
  const Diffaddress = () => {
    setCheck(false);
  };
  return (
    <>
      <Address
        text="Permanant Address"
        address="permanantaddress"
        state="permanantstate"
        country="permanantcountry"
        pincode="permanantpincode"
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
            onClick={Sameaddress}
          />
          <FormControlLabel
            value="No"
            control={<Radio />}
            label="No"
            onClick={Diffaddress}
          />
        </RadioGroup>
      </Typography>
      {check ? null : (
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
