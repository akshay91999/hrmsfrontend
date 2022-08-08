import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Divider, Grid } from '@mui/material';

export default function ViewJobDetails() {
    const DetailsLabel=['Designation','Department','Branch','Package','Type','Date Of Joining'];
    const DetailsData=['Project Manager','IT Department','Thalassery','3 LPA','Full Time','06-08-2020']
    return (
        <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Card sx={{ width: "30%" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        JOB DETAILS
                    </Typography><Divider/>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                        {
                            DetailsLabel.map((data)=>
                            <Typography gutterBottom variant="body1" sx={{ mt: "2%" }} >{data}</Typography>)}
                           
                        </Grid>
                        <Grid item xs={6}>
                        {
                            DetailsData.map((data)=>
                            <Typography gutterBottom variant="body1" sx={{ mt: "2%" }} >{data}</Typography>)}
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
        </Box>
    );
}