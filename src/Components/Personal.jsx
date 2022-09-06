import React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Marital from "./Marital";
import { useState } from "react";
import Textfield from "./Reusablecomponents/Textfield";
import Calender from "./Reusablecomponents/Calender";

function Personal(props) {
  const { values, errors,  handleInputChange } = props;

  const [open, setOpen] = useState(false);
  const formOpen = () => {
    setOpen(true);
  };
  const formClose = () => {
    setOpen(false);
  };
  return (
    
      <fieldset>
        <legend>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ color: "#1565C0" }}
          >
            Personal Details
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
          }}
        >
          <Textfield
            label="First Name"
            id="first-name"
            name="firstname"
            value={values.firstname}
            onChange={handleInputChange}
            error={errors.firstname}
          />
          <Textfield
            label="Last Name"
            id="last-name"
            name="lastname"
            value={values.lastname}
            onChange={handleInputChange}
            error={errors.lastname}
          />
        </Box>
        <Box>
          <FormControl sx={{ pt: "2%", pb: "2%" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel
                size="small"
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                size="small"
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                size="small"
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Calender
            text="date of birth"
            name="dob"
            value={values.dob}
            errors={errors}
            onChange={handleInputChange}
            error={errors.dob}
          />
          <Textfield
            label="Nationality"
            id="nationality"
            name="nationality"
            value={values.nationality}
            onChange={handleInputChange}
            error={errors.nationality}
          />
        </Box>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            width: "100%",
            mt: "2%",
            textAlign: "center",
          }}
        >
          <Textfield
            label="Contact Number"
            id="contact-no"
            name="contactnumber"
            type="number"
            value={values.component}
            onChange={handleInputChange}
            error={errors.contactnumber}
          />
          <Textfield
            label="Alternate Contact Number"
            id="alt-contact-no"
            name="altcontactnumber"
            type="number"
            value={values.altcontactnumber}
            onChange={handleInputChange}
            error={errors.altcontactnumber}
          />
          <Textfield
            label="Email id"
            id="email-id"
            name="emailid"
            value={values.emailid}
            onChange={handleInputChange}
            errors={errors.emailid}
            error={errors.emailid}
          />
          <Textfield
            label="Alternate Email id"
            id="alt-email-id"
            name="altemailid"
            value={values.altemailid}
            onChange={handleInputChange}
            error={errors.altemailid}
          />
          <Textfield
            label="Father's Name"
            id="father's-name"
            name="fathername"
            value={values.fathername}
            onChange={handleInputChange}
            error={errors.fathername}
          />
          <Textfield
            label="Contact Number"
            id="father's-cntno"
            type="number"
            name="fcontactnumber"
            value={values.fcontactnumber}
            onChange={handleInputChange}
            error={errors.fcontactnumber}
          />
          <Textfield
            label="Mother's Name"
            id="mother's-name"
            name="mothername"
            value={values.mothername}
            onChange={handleInputChange}
            error={errors.mothername}
          />
          <Textfield
            label="Contact Number"
            id="mother's-cntno"
            name="mcontactnumber"
            type="number"
            value={values.mcontactnumber}
            onChange={handleInputChange}
            error={errors.mcontactnumber}
          />
        </Box>
        <Box>
          <FormControl sx={{ mt: "2%" }}>
            <label id="demo-row-radio-buttons-group-label">
              Marital Status
            </label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="martialstatus"
              value={values.martialstatus}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="single"
                control={<Radio />}
                label="Single"
                onClick={formClose}
              />
              <FormControlLabel
                value="married"
                control={<Radio />}
                label="Married"
                onClick={formOpen}
              />
            </RadioGroup>
          </FormControl>
          {/* <div className="marital">
                        { */}
          {open ? (
            <Marital
              sx={{ textAlign: "center" }}
              values={values}
              handleInputChange={handleInputChange}
              errors={errors}
            />
          ) : null}
          {/* } */}
          {/* </div> */}
          {/* <Box sx={{display:"flex",justifyContent:"flex-end"}}><Btn text="Save" click={handlesubmit} /></Box> */}
        </Box>
      </fieldset>
   
  );
}

export default Personal;
