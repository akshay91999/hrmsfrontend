import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import ElderlyIcon from "@mui/icons-material/Elderly";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse, List } from '@mui/material';
import NoteAltSharpIcon from '@mui/icons-material/NoteAltSharp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
function ListVisitormngmnt() {
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <>
       <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ElderlyIcon/>
                </ListItemIcon>
                <ListItemText primary="VISITOR" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 1 }}>
            <ListItemButton onClick={() => navigate("/VisitorPassForm")}>
            <ListItemIcon>
            <NoteAltSharpIcon />
            </ListItemIcon>
            <ListItemText primary="VISITOR PASS FORM" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/VisitorList")}>
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary="VISITOR LIST " />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/VisitorCheckOut")}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="VISITOR CHECK OUT " />
          </ListItemButton>
            </List>
      </Collapse>
    </>
  )
}

export default ListVisitormngmnt