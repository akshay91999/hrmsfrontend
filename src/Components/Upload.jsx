import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import Btn from './Reusablecomponents/Btn';
function Upload(props) {
    const {text,onChange,onSubmit}=props
    return (
        // <div className="App">
           <fieldset>
            <legend><Typography variant="h6" gutterBottom component="div">
             {text} 
            </Typography></legend>
            
        
        Upload a file:
        <input type="file" style={{marginLeft:'1%',paddingBottom:'2%'}} onChange={onChange} />
        <Button onClick={onSubmit}  variant="contained" sx={{ background:'linear-gradient(#1565C0,#8B8B8B)' }}>
                  Upload!
                </Button>
        
      
      </fieldset>
        // </div>
      );
    }
export default Upload