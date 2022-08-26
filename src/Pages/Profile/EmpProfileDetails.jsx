import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
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

export default function BasicTabs() {
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
              <ListItemText primary="Nevina Acantaza" />
              </Grid>
          </ListItem>
          <ListItem disablePadding>
          <Grid item xs={6}>
            <ListItemText primary="Email" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary="nav@gmail.com" />
              </Grid>
          </ListItem>
          <ListItem disablePadding>
          <Grid item xs={6}>
            <ListItemText primary="Phone" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary="9876543210" />
              </Grid>
          </ListItem>
          <ListItem disablePadding>
          <Grid item xs={6}>
            <ListItemText primary="Employee Id" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary="9876" />
              </Grid>
          </ListItem>
          <ListItem disablePadding>
          <Grid item xs={6}>
            <ListItemText primary="Joining Date" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary="12/02/2022" />
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
              <ListItemText primary="Address1" />
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
            <ListItemText primary="Indian" />
            </Grid>
        </ListItem>
       
        </List>
      </nav>
      </Box>
      </TabPanel>
    </Box>
  );
}