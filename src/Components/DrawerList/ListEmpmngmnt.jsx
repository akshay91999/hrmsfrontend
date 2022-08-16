import React from 'react'
import { List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useNavigate } from "react-router-dom";



function ListEmpmngmnt() {
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
       <ListItemButton onClick={handleClick}>
        <ListItemIcon><GroupsIcon/></ListItemIcon>
        <ListItemText primary="EMPLOYEE" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 1 }}>
        <ListItemButton onClick={() => navigate("/addemployee")}>
                <ListItemIcon>
                    <AddIcon/>
                </ListItemIcon>
                <ListItemText primary="ADD EMPLOYEE" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/employeelist")}>
                <ListItemIcon>
                    <RemoveRedEyeOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="VIEW EMPLOYEE" />
            </ListItemButton>
        </List>
        </Collapse>
    </>
  )
}

export default ListEmpmngmnt
