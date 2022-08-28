import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HrDayAttandance from './DayAttandance';

export default function HrAttandanceTab() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
       
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Todays Attandance" value="1" />
                        <Tab label="Previous Day Attandance" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <HrDayAttandance />
                </TabPanel>
                <TabPanel value="2">
                    <HrDayAttandance />
                </TabPanel>
            </TabContext>
        </Box>
      
    );
}