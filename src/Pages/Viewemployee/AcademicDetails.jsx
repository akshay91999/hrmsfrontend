import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid,Divider } from '@mui/material';

export default function AcademicDetails() {
    const DetailsLabel=['Institution/School','Board/University', 'Courses','Branch','Type','Duration From','Duration To'];
    const DetailsData=['School of Information Science and Technology','Kannur University, Campus', 'Master of Computer Application','Computer Science','Full Time','06-08-2020','30-09-2022']
    return (
        <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Card sx={{ width: "90%" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       ACADEMIC DETAILS
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
