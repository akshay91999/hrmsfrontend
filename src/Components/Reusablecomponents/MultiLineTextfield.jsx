import React from "react";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
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
});
function MultiLineTextfield(props) {
  const { label, id, name, value, onChange, error = null } = props;
  return (
    <div>
      <CssTextField
        size="small"
        sx={{ width: "90%" }}
        label={label}
        id="outlined-multiline-static"
        name={name}
        value={value}
        onChange={onChange}
        multiline
        maxRows={4}
        {...(error && { error: true, helperText: error })}
      />
    </div>
  );
}

export default MultiLineTextfield;
