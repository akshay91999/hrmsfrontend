// import { Autocomplete, TextField } from "@mui/material";
// import React from "react";
// import { styled } from "@mui/material/styles";
// const CssTextField = styled(TextField)({
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#1565C0",
//     },
//     "&:hover fieldset": {
//       borderColor: "brown",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#1565C0",
//     },
//   },
// });

// function AutocompletePosition(props) {
//   const { options, value, handleInputChange, name,error} = props;
//   return (
//     <>
//       <Autocomplete
//         id="free-solo-demo"
//         freeSolo
//         value={value}
//         onChange={handleInputChange}
//         options={options.map((option) => option.title)}
//         renderInput={(params) => (
//           <CssTextField
//             {...params}
//             label="freeSolo"
//             sx={{width:'90%'}}
//             name={name}
            
//             size="small"
//             {...(error && { error: true, helperText: error })}
//           />
//         )}
//       />
//     </>
//   );
// }

// export default AutocompletePosition;
