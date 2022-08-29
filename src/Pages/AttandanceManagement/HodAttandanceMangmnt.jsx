import React from 'react'
import { Paper } from '@mui/material';
import HrAttandanceTab from './AttandanceTab';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
export default function HodAttandance() {
    return (
        <div>
            <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
                <HrAttandanceTab />
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Link style={{ textDecoration: 'none', color: 'blue' }} to="/hrcompleteattandancetable">VIEW ALL</Link>
                    </Box>
            </Paper>
        </div>
    )
}

