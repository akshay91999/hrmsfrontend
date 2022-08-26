import { Box, Dialog, DialogActions, DialogContent, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import Btn from "./Reusablecomponents/Btn";
import MultiLineTextfield from "./Reusablecomponents/MultiLineTextfield";
import Textfield from "./Reusablecomponents/Textfield";
import useForm from "./Validation/useForm";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const initialFvalues = {
  quote: "",
  name: "",
  designation: "",
};

function ThoughtFormHr(props) {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validate = () => {
    const temp = {};
    temp.quote = values.quote ? "" : "please enter your value";
    temp.name = values.name ? "" : "please enter your value";
    temp.designation = values.designation ? "" : "please enter a value";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const handlesubmit = () => {
    if (validate()) {
      window.alert("successfully updated");
    }
  };
  const handleclear = () => {
    setValues({
      quote: "",
      name: "",
      designation: "",
      
    });
  };

  return (
    <>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleClickOpen }>
        <FormatQuoteIcon />
      </IconButton>
       {props.p? <p>Quotes</p>:null}
      <Dialog open={open} onClose={handleClose}>
      
        
        <DialogContent sx={{ width:'500px' }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "3%" }}
        >
          Add Thought Of The Day
        </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr" },
              gap: 2,
              width: "100%",
              pl: "5%",
            }}
          >
            <MultiLineTextfield
              label="Enter Quotes"
              name="quote"
              value={values.quote}
              error={errors.quote}
              onChange={handleInputChange}
            />
            <Textfield
              label="Whose Quote Is This"
              name="name"
              value={values.name}
              error={errors.name}
              onChange={handleInputChange}
            />
            <Textfield
              label="who is he/she"
              name="designation"
              value={values.designation}
              error={errors.designation}
              onChange={handleInputChange}
            />
          </Box>
          </DialogContent>
          <DialogActions>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              p: "1%",
            }}
          >
            <Btn text="Submit" click={handlesubmit} />
            <Btn text="Cancel" click={handleclear} />
          </Box>
          </DialogActions>
      </Dialog>
    </>
  );
}

export default ThoughtFormHr;
