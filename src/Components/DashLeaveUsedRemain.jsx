import { Card, Divider, Typography,Box,Grid} from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from 'react-router-dom'
import { UserContext } from "../App";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export default function DashLeaveUsedRemain() {
    let navigate=useNavigate()
    const user=JSON.parse(localStorage.getItem('user'))
    const [data,setData]=useState({})
    useEffect(()=>{
      axios.get("http://localhost:5000/showleave/dashboard/"+user.id)
      .then(function(response){
        console.log(response.data)
        setData(response.data)
      })
      .catch(function(error){
        console.log(error)
      })
    },[])
  return (
    <>
       <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            borderRadius: "10px",
            width: "100%",
            p: "2%",
            alignContent: "center"
          }}
        >
          <Grid container>
            <Grid item xs={6} lg={6} md={6} sm={6}>
            <Box sx={{ pt:'3%',pl:'2%' }}>
              <Typography variant="Button" sx={{ fontWeight: "600"}}>
                YOUR LEAVE
              </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} lg={6} md={6} sm={6}>
            <Box sx={{ display:'flex',justifyContent:'right' }}>
              <IconButton onClick={()=>navigate("/LeaveUsedRemaininDetail/"+user.id)}>
                <Typography sx={{ display: "flex",color:'#1565C0'}}>
                  View
                  <ArrowRightIcon />
                </Typography>
              </IconButton>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
             
            //   border: (theme) => `1px solid ${theme.palette.divider}`,
            //   borderRadius: 1,
              bgcolor: 'background.paper',
              color: 'text.secondary',
              mt:'1%',
            p:"2%"
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={3.8} sm={6} xs={12} md={3.8}>
                <Typography gutterBottom
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: "2%",
                    fontWeight: "bold",
                  }}
                >
                  Total
                </Typography>
                <Typography sx={{ textAlign: "center" }}>{data.total}</Typography>
               
              </Grid>
              <Divider sx={{mt:"5%"}} orientation="vertical" variant="middle" flexItem />
              <Grid item lg={3.8} sm={6} xs={12} md={3.8}>
                <Typography gutterBottom
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: "2%",
                    fontWeight: "bold",
                  }}
                >
                  Used
                </Typography>
                <Typography sx={{ textAlign: "center" }}>{data.used}</Typography>
              </Grid>
              <Divider sx={{mt:"5%"}} orientation="vertical" variant="middle" flexItem />
              <Grid item lg={3.8} sm={6} xs={12} md={3.8}>
                <Typography gutterBottom
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: "2%",
                    fontWeight: "bold",
                  }}
                >
                  Remain
                </Typography>
                <Typography sx={{ textAlign: "center" }}>{data.total-data.used}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </>
  );
}