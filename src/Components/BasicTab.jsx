import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PersonalDetails from '../Pages/Viewemployee/PersonalDetails';
import AcademicDetails from '../Pages/Viewemployee/AcademicDetails';
import ViewJobDetails from '../Pages/Viewemployee/ViewJobDetails';
import ExperienceDetails from '../Pages/Viewemployee/ExperienceDetails';

export default function BasicTab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="PERSONAL DETAILS" value="1" />
            <Tab label="ACADEMIC DETAILS" value="2" />
            <Tab label="EXPERIENCE DETAILS" value="3" />
            <Tab label="JOB DETAILS" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
      <PersonalDetails/>
        </TabPanel>
        <TabPanel value="2">
          <AcademicDetails/>
        </TabPanel>
        <TabPanel value="3">
          <ExperienceDetails/>
        </TabPanel>
        <TabPanel value="4">
          <ViewJobDetails/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
