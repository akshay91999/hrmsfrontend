
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid,Divider } from '@mui/material';

export default function ExperienceDetails() {
    const DetailsLabel=['Employee ID','Employee Type','Designation','Annual Salary','Duration From','Duration To'];
    const DetailsData=['Emp1123','FullTime','Junior Project Manager','2 LPA','06-08-2020','06-08-2021']
    return (
        <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Card sx={{ width: "30%" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        EXPERIENCE DETAILS
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