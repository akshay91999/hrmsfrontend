import React from "react";
import Personal from "../Components/Personal";
import Grid from '@mui/material/Grid';
import AddressCalling from "../Components/Address/AddressCalling";
import { Typography } from "@mui/material";
import Btn from "../Components/Btn";
import {useNavigate} from 'react-router-dom'

function Basic() {
  let navigate=useNavigate()
  return (
  <>
    <Typography variant='h4' align='center' sx={{ color:'#1565C0',mt:'1%'}} >Details</Typography>
    <Grid container spacing={2} sx={{ pt:'1%' }}>
      
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Personal />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
       <AddressCalling/>
       <Typography align='right' sx={{ p:'1%' }}>
       <Btn text='Next' click={()=>{navigate("/academic")}}/>
       </Typography>
      </Grid>
    </Grid>
    </>
  );
}
export default Basic;