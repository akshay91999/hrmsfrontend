import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

export default function VisitorCard() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12} sm={12}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Card sx={{ display: "flex", justifyContent: "center",mt:'2%',width:'500px' }}>
            <Avatar
              sx={{ height: "100px", width: "100px", mt: "9%",ml:"1%" }}
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUMmsGX2vc-fXzh8BKfkNnfeSNMASisRqsw&usqp=CAU"
            />
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <CardContent sx={{ display: "flex", gap: "12%" }}>
                <Typography
                  component="div"
                  variant="subtitle1"
                  fontWeight="600"
                >
                  Date:12/09/2022
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontWeight="600"
                >
                  Pass No:12436
                </Typography>
              </CardContent>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  pl: "5%",
                }}
              >
                <ListItem alignItems="flex-start" sx={{ gap: "25%" }}>
                  <ListItemText primary="Name"></ListItemText>
                  <ListItemText primary="Samuel"></ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start" sx={{ gap: "22%" }}>
                  <ListItemText primary="Address"></ListItemText>
                  <ListItemText primary="Address 1"></ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Id Proof Number"></ListItemText>
                  <ListItemText primary="426878"></ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start" sx={{ gap: "20%" }}>
                  <ListItemText primary="Time In"></ListItemText>
                  <ListItemText primary="12.30"></ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start" sx={{ gap: "17%" }}>
                  <ListItemText primary="Time Out"></ListItemText>
                  <ListItemText primary="2.30"></ListItemText>
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start" sx={{ gap: "3%" }}>
                  <ListItemText primary="Contact Person"></ListItemText>
                  <ListItemText primary="David"></ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start" sx={{ gap: "13%" }}>
                  <ListItemText primary="Department"></ListItemText>
                  <ListItemText primary="Marketing"></ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start" sx={{ gap: "11%" }}>
                  <ListItemText primary="Employee Id"></ListItemText>
                  <ListItemText primary="87432"></ListItemText>
                </ListItem>
              </List>
            </Box>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
