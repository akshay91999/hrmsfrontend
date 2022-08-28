// import { Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import React from 'react'

// export default function ViewLinkEmployeeForm() {
//     return (
//         <>
//     <Typography
//     variant="h4"
//     align="center"
//     sx={{ color: "#1565C0", pb: "2%" }}
//   >
//     Learning and development
//   </Typography>


//   <Box
//     component="form"
//     novalidate
//     sx={{
//       display: "grid",
//       gridTemplateColumns: { sm: "1fr" },
//       gap: 2,
//       width: "100%",
//     }}
//   >
//     <Typography>
// New link
//     </Typography>
//     <Typography>
// Description
//     </Typography>
//     <Typography>
// Recent links
//     </Typography>
//       </Box>
// </>
//   );

// }


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
import Link from '@mui/material/Link';
const preventDefault = (event) => event.preventDefault();

export default function ViewLinkEmployeeForm() {
  const theme = useTheme();

  return (

    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Learning and development
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Card sx={{ height:'100%', display: "flex", justifyContent: "center", mt: '2%', width: '500px' }}>
              {/* <Avatar
              sx={{ height: "100px", width: "100px", mt: "9%",ml:"1%" }}
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUMmsGX2vc-fXzh8BKfkNnfeSNMASisRqsw&usqp=CAU"
            /> */}
              {/* export default function UnderlineLink() {
  return ( */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  typography: 'body1',
                  '& > :not(style) + :not(style)': {
                    ml: 2,
                  },
                }}
                onClick={preventDefault}
              >


                {/* <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}  onClick={preventDefault}
             > */}
                <CardContent>
                  <iframe
                    src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                  />{" "}
                  <Typography variant='body2'>This Video is a react tutorial</Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>

    </>
  );
}
