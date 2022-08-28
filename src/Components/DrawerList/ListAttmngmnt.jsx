import React from 'react'
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse, List } from '@mui/material';
import FingerprintIcon from "@mui/icons-material/Fingerprint";


function ListAttmngmnt() {
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    
  return (
    <>
        <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <FingerprintIcon/>
                </ListItemIcon>
                <ListItemText primary="ATTENDANCE" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 1 }}>
            <ListItemButton onClick={() => navigate("/attandance")}>
            <ListItemIcon>
            <FingerprintIcon />
            </ListItemIcon>
            <ListItemText primary=" Employee Attendance" />
          </ListItemButton>
          {/* <ListItemButton onClick={() => navigate("/hodattandance")}>
            <ListItemIcon>
              <FingerprintIcon />
            </ListItemIcon>
            <ListItemText primary="ATTANDANCE BY HOD" />
          </ListItemButton> */}
          <ListItemButton onClick={() => navigate("/hodassignshift")}>
            <ListItemIcon>
              <FingerprintIcon />
            </ListItemIcon>
            <ListItemText primary="Assign Shift" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/hodassignovertime")}>
            <ListItemIcon>
              <FingerprintIcon />
            </ListItemIcon>
            <ListItemText primary="Assign over-time" />
          </ListItemButton>
          
            </List>
      </Collapse>
    </>
  )
}

export default ListAttmngmnt
