import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonalDetails from '../Pages/Viewemployee/PersonalDetails'
import AcademicDetails from '../Pages/Viewemployee/AcademicDetails';
import ExperienceDetails from '../Pages/Viewemployee/ExperienceDetails';
import ViewJobDetails from '../Pages/Viewemployee/ViewJobDetails';
import { Grid } from '@mui/material';
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
        <Box sx={{ p: 0 }}>
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
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>  
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
            '& .MuiTabs-flexContainer': {
              flexWrap: 'wrap',
            },
          }}>      
          <Tab label="Personal Details" {...a11yProps(0)} />
          <Tab label="Academic Details" {...a11yProps(1)} />
          <Tab label="Experience Details" {...a11yProps(2)} />
          <Tab label="Job Details" {...a11yProps(3)} />      
        </Tabs>  
      </Box>
      <TabPanel value={value} index={0}>
      <PersonalDetails/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <AcademicDetails/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ExperienceDetails/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <ViewJobDetails/>
      </TabPanel>
    </Box>
  );
}