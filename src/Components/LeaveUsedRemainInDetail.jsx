import React from "react";
import { Card, Divider, Typography, Box, Grid } from "@mui/material";
import EmployeeLeaveTaken from "./EmployeeLeaveTaken";
export default function LeaveUsedRemainInDetail() {
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
                <Typography sx={{ textAlign: "center" }}>12</Typography>
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
                <Typography sx={{ textAlign: "center" }}>08</Typography>
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
                <Typography sx={{ textAlign: "center" }}>12</Typography>
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
                <Typography sx={{ textAlign: "center" }}>08</Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
      <EmployeeLeaveTaken/>
    </>
  );
}