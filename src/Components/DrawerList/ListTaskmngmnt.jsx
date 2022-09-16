import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import ElderlyIcon from "@mui/icons-material/Elderly";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse, List } from '@mui/material';
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

function ListTaskmngmnt() {
    let navigate = useNavigate();
    const user=JSON.parse(localStorage.getItem('user'))
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    const renderList=()=>{
     
      if(user.user_type===1)
      {
      return(
        <List component="div" disablePadding sx={{ pl: 1 }}>
            <ListItemButton onClick={() => navigate("/hrtaskemployeetable")}>
            <ListItemIcon>
            <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Hr Task management" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/hodtaskemployeetable")}>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Hod Task Management " />
          </ListItemButton>
            </List>
      )
    }
    else if(user.user_type===2||user.user_type===3)
    {
    return(
      <List component="div" disablePadding sx={{ pl: 1 }}>
            <ListItemButton onClick={() => navigate("/hrtaskemployeetable")}>
            <ListItemIcon>
            <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Hr task management" />
          </ListItemButton>
            </List>
    )
    }
    else if(user.user_type===5)
    {
    return(
      <ListItemButton onClick={() => navigate("/hodtaskemployeetable")}>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Hod Task Management " />
          </ListItemButton>
    )
    }
    }
  return (
    <>
       <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <AssignmentIndIcon/>
                </ListItemIcon>
                <ListItemText primary="TASK MANAGEMENT" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton> 

            <Collapse in={open} timeout="auto" unmountOnExit>
           {renderList()}
      </Collapse>
    </>
  )
}

export default ListTaskmngmnt
