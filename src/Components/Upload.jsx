import React from 'react'
import Typography from '@mui/material/Typography';
function Upload(props) {
    
    return (
        // <div className="App">
           <fieldset>
            <legend><Typography variant="h6" gutterBottom component="div">
             {props.text} 
            </Typography></legend>
        
        Upload a file:
        <input type="file" style={{marginLeft:'1%'}}/>
      
      </fieldset>
        // </div>
      );
    }
export default Upload