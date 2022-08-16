import { Card, Divider, Typography,Box,Grid} from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from 'react-router-dom'
export default function DashLeaveUsedRemain() {
    let navigate=useNavigate()
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            borderRadius: "10px",
            width: "100%",
            p: "1%",
            border: "1px solid #1565C0",
            alignContent: "center"
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} lg={6} md={6} sm={6}>
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                Your Leave
              </Typography>
            </Grid>
            <Grid item xs={6} lg={6} md={6} sm={6}>
              <IconButton sx={{ float: "right" }} onClick={()=>{navigate("/LeaveUsedRemainInDetail")}}>
                <Typography sx={{ display: "flex",color:'#1565C0'}}>
                  View
                  <ArrowRightIcon />
                </Typography>
              </IconButton>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
             
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: 'background.paper',
              color: 'text.secondary',
             mt:"1%",
            p:"2%"
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={3.8} sm={6} xs={12} md={6}>
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
                <Typography sx={{ textAlign: "center" }}>12</Typography>
               
              </Grid>
              <Divider sx={{mt:"5%"}} orientation="vertical" variant="middle" flexItem />
              <Grid item lg={3.8} sm={6} xs={12} md={6}>
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
                <Typography sx={{ textAlign: "center" }}>08</Typography>
              </Grid>
              <Divider sx={{mt:"5%"}} orientation="vertical" variant="middle" flexItem />
              <Grid item lg={3.8} sm={6} xs={12} md={6}>
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
                <Typography sx={{ textAlign: "center" }}>04</Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </>
  );
}
