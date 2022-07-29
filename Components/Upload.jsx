import React ,{ Component }from 'react'
import {Button } from '@mui/material'
import Typography from '@mui/material/Typography';
function Upload(props) {
    
    return (
        // <div className="App">
           <fieldset>
            <legend><Typography variant="h6" gutterBottom component="div">
             {props.text} 
            </Typography></legend>
         <Button component="label">
        {" "}
        Upload a file
        <input type="file"/>
      </Button>
      </fieldset>
        // </div>
      );
    }
export default Upload