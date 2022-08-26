import React from 'react'
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse, List } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NoCrashIcon from '@mui/icons-material/NoCrash';
function ListTravelmngmnt() {
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <>
       <ListItemButton onClick={handleClick}>
                <ListItemIcon><EmojiTransportationIcon/></ListItemIcon>
                <ListItemText primary="TRAVEL" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>  
            <Collapse in={open} timeout="auto" unmountOnExit>
     <List component="div" disablePadding sx={{ pl: 1 }}>
     <ListItemButton onClick={() => navigate("/BookTrips")}>
            <ListItemIcon>
              <EventAvailableIcon />
            </ListItemIcon>
            <ListItemText primary="BOOK TRIPS" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/TripApproval")}>
            <ListItemIcon>
              <NoCrashIcon />
            </ListItemIcon>
            <ListItemText primary="TRIP APPROVAL" />
          </ListItemButton>
      </List>
      </Collapse>
    </>
  )
}

export default ListTravelmngmnt