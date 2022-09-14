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
    const user=JSON.parse(localStorage.getItem('user'))
    const [open, setOpen] = React.useState(false);
  const renderList=()=>{
    if(user.user_type===1||user.user_type===5)
    {
      return(
        <List component="div" disablePadding sx={{ pl: 1 }}>
        <ListItemButton onClick={() => navigate("/attandance")}>
        <ListItemIcon>
        <FingerprintIcon />
        </ListItemIcon>
        <ListItemText primary=" Employee Attendance" />
      </ListItemButton>
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
      )
    }
    else if(user.user_type===2||user.user_type===3)
    {
      return(
        <List component="div" disablePadding sx={{ pl: 1 }}>
        <ListItemButton onClick={() => navigate("/attandance")}>
        <ListItemIcon>
        <FingerprintIcon />
        </ListItemIcon>
        <ListItemText primary=" Employee Attendance" />
      </ListItemButton>
      </List>
      )
    }
  }
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
           {renderList()}
      </Collapse>
    </>
  )
}

export default ListAttmngmnt
