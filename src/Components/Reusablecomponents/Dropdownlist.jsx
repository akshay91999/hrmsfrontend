import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { FormHelperText } from '@mui/material'

function Dropdownlist(props) {
    const {name,label,value,handleInputChange,options,error=null}=props
  return (
    <>
    {console.log(options)}
       <FormControl sx={{
                    width: "90%",
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
                }} size="small"
                {...(error&&{error:true})}
                >
                    <InputLabel id="demo-select-small" >{label}</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={value}
                        label={label}
                        name={name}
                        onChange={handleInputChange}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        {
                            options.map(
                                item =>(<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                            )
                        }
                    </Select>
                    {error&&<FormHelperText>{error}</FormHelperText>}
                </FormControl>
    </>
  )
}

export default Dropdownlist
