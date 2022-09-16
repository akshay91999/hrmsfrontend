import React, { useEffect } from "react";
import { Card, Divider, Typography, Box, Grid } from "@mui/material";
import EmployeeLeaveTaken from "./EmployeeLeaveTaken";
import axios from "axios";
import {useParams } from "react-router-dom";
import { useState } from "react";
export default function LeaveUsedRemainInDetail(props) {
 
  const params=useParams()
  const [dataleave,setDataleave]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/request/"+params.id)
    .then(function(response){
      console.log(params)
      console.log(response)
setDataleave(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
  },[])
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "3%",p:"3%" }}>
        <Card
          sx={{
            borderRadius: "10px",
            width: "20%",
            p: "1%",
         
            alignContent: "center",borderLeft: "8px solid #A5C5E4"
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "600",pb:"2%" }}>
            Paid Leave
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: "background.paper",
              color: "text.secondary",
              mt: "1%",
              p: "2%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={5.8} sm={6} xs={12} md={6}>
                <Typography
                  gutterBottom
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: "2%",
                    fontWeight: "bold",
                  }}
                >
                  Balance
                </Typography>
                <Typography sx={{ textAlign: "center" }}>{dataleave.balancePaid}</Typography>
              </Grid>
              <Divider
                sx={{ mt: "5%" }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <Grid item lg={5.8} sm={6} xs={12} md={6}>
                <Typography
                  gutterBottom
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: "2%",
                    fontWeight: "bold",
                  }}
                >
                  Used
                </Typography>
                <Typography sx={{ textAlign: "center" }}>{dataleave.usedPaid}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>

        <Card
          sx={{
            borderRadius: "10px",
            width: "20%",
            p: "1%",
            borderLeft: "8px solid #A5C5E4",
            alignContent: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "600",pb:"2%" }}>
            Unpaid Leave
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: "background.paper",
              color: "text.secondary",
              mt: "1%",
              p: "2%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={5.8} sm={6} xs={12} md={6}>
                <Typography
                  gutterBottom
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: "2%",
                    fontWeight: "bold",
                  }}
                >
                  Balance
                </Typography>
                <Typography sx={{ textAlign: "center" }}>{dataleave.balanceUnpaid}</Typography>
              </Grid>
              <Divider
                sx={{ mt: "5%" }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <Grid item lg={5.8} sm={6} xs={12} md={6}>
                <Typography
                  gutterBottom
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    m: "2%",
                    fontWeight: "bold",
                  }}
                >
                  Used
                </Typography>
                <Typography sx={{ textAlign: "center" }}>{dataleave.usedUnpaid}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
        
      </Box>
      <Box>
      <EmployeeLeaveTaken/>
      </Box>
      
    </>
  );
}