import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields({text,name,onChange,error}) {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    // <Box
    //   component="form"
    //   sx={{
    //     '& .MuiTextField-root': { m: 1, width: '50ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
      <div>
     
        <TextField size='small' sx={{ width:'90%','& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#1565C0',
      },
      '&:hover fieldset': {
        borderColor: 'brown',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1565C0',
      },
    }
    }}
          id="outlined-multiline-static"
          label={text}
          multiline
          rows={4}
          name={name}
          
          onChange={onChange}
          {...(error && {error:true,helperText:error})}
          InputLabelProps={{
            shrink: true,}}
          // defaultValue="Default Value"
        />
      </div>
      
    
    // </Box>
  );
}
