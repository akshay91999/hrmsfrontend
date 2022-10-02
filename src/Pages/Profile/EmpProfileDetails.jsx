import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useEffect } from 'react';
import axios from 'axios';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const {basic}=props
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/job/"+basic.basic_id)
  //   .then(function(response){
  //     console.log(response)
  //   })
  // },[])

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',background: "#A5C5E4 "}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Other Info" {...a11yProps(1)} />
          {/* #8B8B8B */}
          {/* #1565C0 */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
          <Grid item xs={6}>
            <ListItemText primary="Name" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary={basic.firstname+" "+basic.lastname} />
              </Grid>
          </ListItem>
          <ListItem disablePadding>
          <Grid item xs={6}>
            <ListItemText primary="Email" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary={basic.email} />
              </Grid>
          </ListItem>
          <ListItem disablePadding>
          <Grid item xs={6}>
            <ListItemText primary="Phone" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary={basic.contactnumber} />
              </Grid>
          </ListItem>
          <ListItem disablePadding>
          <Grid item xs={6}>
            <ListItemText primary="Employee Id" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary={basic.basic_id} />
              </Grid>
          </ListItem>
          <ListItem disablePadding>
          <Grid item xs={6}>
            <ListItemText primary="Date of Birth" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary={basic.dob} />
              </Grid>
          
          </ListItem>
        </List>
      </nav>
      </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
          <Grid item xs={8}>
            <ListItemText primary="Address" />
            </Grid>
            <Grid item xs={4}>
              <ListItemText primary={basic.e_address} />
              </Grid>
          </ListItem>
          <ListItem disablePadding>
          <Grid item xs={8}>
            <ListItemText primary="Birthday" />
            </Grid>
            <Grid item xs={4}>
              <ListItemText primary="10/02/2022" />
              </Grid>
          </ListItem>
          <ListItem disablePadding>
          <Grid item xs={8}>
          <ListItemText primary="Highest Qualification" />
          </Grid>
          <Grid item xs={4}>
            <ListItemText primary="MCA" />
            </Grid>
        </ListItem>
        <ListItem disablePadding>
        <Grid item xs={8}>
          <ListItemText primary="Nationality" />
          </Grid>
          <Grid item xs={4}>
            <ListItemText primary={basic.nationality} />
            </Grid>
        </ListItem>
       
        </List>
      </nav>
      </Box>
      </TabPanel>
    </Box>
  );
}