import React, { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Collapse, List } from '@mui/material';
import WcIcon from '@mui/icons-material/Wc';
import FolderSharedIcon from '@mui/icons-material/FolderShared';



function ListHranalytics() {
    let navigate = useNavigate();
    const [open,setOpen]=useState(false);
    const handleClick=()=>{
      setOpen(!open)
    };
  return (
    <>
      <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <AnalyticsIcon/>
                </ListItemIcon>
                <ListItemText primary="HR ANALYTICS" />
                {open?<ExpandLess/>:<ExpandMore/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List Component="div" disablePadding sx={{ pl:1 }}>
                <ListItemButton onClick={()=>navigate("/empmovements")}>
                  <ListItemIcon>
                    <PersonRemoveIcon/>
                  </ListItemIcon>
                  <ListItemText primary="EMPLOYEE MOVEMENTS"/>
              </ListItemButton>
                <ListItemButton onClick={()=>navigate("/genderanalysis")}>
                  <ListItemIcon>
                    <WcIcon/>
                  </ListItemIcon>
                  <ListItemText primary="GENDER ANALYTICS"/>
              </ListItemButton>
                <ListItemButton onClick={()=>navigate("/ageanalysis")}>
                  <ListItemIcon>
                    <FolderSharedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="AGE ANALYTICS"/>
              </ListItemButton>
              </List>
            </Collapse>
    </>
  )
}

export default ListHranalytics
