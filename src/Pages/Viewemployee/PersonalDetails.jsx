import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid, Divider } from '@mui/material';

export default function PersonalDetails() {
    const DetailsLabel = ['First Name', 'Last Name', 'Gender', 'DOB', 'Contact Number', 'Email  id', 'Fathers Name', 'MotherS Name', 'Marital Status', 'Address', 'City', 'Country', 'Pincode'];
    const DetailsData = ['Ram', 'Shankar', 'Male', '20-10-1994', '7790369226', 'ramshankar@gmail.com', 'Shankar', 'Rani', 'Single', 'House No.1', 'Kannur', 'India', '670641']
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{maxWidth:'200', width: "100%" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        PERSONAL DETAILS
                    </Typography><Divider />
                    <Grid container spacing={2}>
                        <Grid item xs={6} lg={6}>
                            {
                                DetailsLabel.map((data) =>
                                    <Typography gutterBottom variant="body1" sx={{ mt: "2%" }} >{data}</Typography>)}
                        </Grid>
                        <Grid item xs={6} lg={6}>
                            {
                                DetailsData.map((data) =>
                                    <Typography gutterBottom variant="body1" sx={{ mt: "2%" }} >{data}</Typography>)}

                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Box>
    );
}
