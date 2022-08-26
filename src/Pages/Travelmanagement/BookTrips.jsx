import { Box, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../Components/Reusablecomponents/Btn";
import Calender from "../../Components/Reusablecomponents/Calender";
import Time from "../../Components/Reusablecomponents/Time";
import useForm from "../../Components/Validation/useForm";
const initialFvalues = {
  selectdate: "",
  time:'',
  bookingtype:'pickup',
  location:''
};
export default function BookTrips() {
    let navigate=useNavigate()
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    let temp = {};
    temp.selectdate = values.selectdate ? "" : "This field is required";
    temp.time = values.time ? "" : "This field is required";
    temp.bookingtype = values.bookingtype ? "" : "This field is required";
    temp.location = values.location ? "" : "This field is required";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const handlesubmit = () => {
    // loging values
    console.log(values);
    if (validate()) {
      window.alert("Booking Confirmed");
      navigate("/MyTransport")
    }
  };
  return (
    <>
      <Paper sx={{ pl: "3%", m: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Book Trips
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} sm={12} md={12}>
          <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr" },
            gap: 2,
            width: "100%",
            mt: "2%",
            // textAlign: "center",
          }}
        >
            <Calender
              text="Select Date "
              name="selectdate"
              value={values.selectdate}
              errors={errors}
              onChange={handleInputChange}
              error={errors.selectdate}
            />
            <Time
              text="Time"
              name="time"
              value={values.time}
              errors={errors}
              onChange={handleInputChange}
              error={errors.time}
              renderInput={(parameters) => <TextField {...parameters} />}
            />
            <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="bookingtype"
                    value={values.bookingtype}
                    onChange={handleInputChange}
                    error={errors.bookingtype}
                    sx={{gap:"7%",pl:"7%"}}
                >
                    <FormControlLabel
                        size="small"
                        value="pickup"
                        control={<Radio />}
                        label="Pick Up"
                    />
                    <FormControlLabel
                        size="small"
                        value="drop"
                        control={<Radio />}
                        label="Drop"
                    />
                </RadioGroup>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} sm={12} md={12}>
          <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr" },
            gap: 2,
            width: "90%",
            mt: "2%",
            // textAlign: "center",
          }}
        >
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1565C0",
                  },
                  "&:hover fieldset": {
                    borderColor: "brown",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1565C0",
                  },
                },
              }}
              id="outlined-multiline-static"
              label="Location"
              name="location"
              value={values.location}
              onChange={handleInputChange}

              multiline
              rows={4}
              {...(errors.location && { error: true, helperText: errors.location })}
            />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: '1%' }}>
                <Btn text="Confirm Booking" click={handlesubmit} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}