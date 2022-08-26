import React from "react";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#1565C0',
    },
    '&:hover fieldset': {
      borderColor: 'brown',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1565C0',
    },

  },
});
function Textfield(props) {
  const { label, id, name, value, onChange, error = null,type } = props
  return (
    <div>
      <CssTextField
        size="small"
        
        sx={{ width: '90%' }}
        label={label} id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        {...(error && { error: true, helperText: error })}
      />
    </div>
  );
}
export default Textfield