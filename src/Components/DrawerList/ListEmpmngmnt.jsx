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
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { useContext } from 'react';
import { UserContext } from '../../App';



function ListEmpmngmnt() {
    const {state,dispatch}=useContext(UserContext)
     const user=JSON.parse(localStorage.getItem('user'))
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
 const renderList=()=>{
    if(user.user_type===1)
    {
        return(
            <List component="div" disablePadding sx={{ pl: 1 }}>
            <ListItemButton onClick={() => navigate("/addemployee")}>
                    <ListItemIcon>
                        <AddIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Add Employee" />
                </ListItemButton>
            <ListItemButton onClick={() => navigate("/employeelist")}>
                    <ListItemIcon>
                        <RemoveRedEyeOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="View Employee" />
                </ListItemButton>
            <ListItemButton onClick={() => navigate("/resignationform")}>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Resignation Form" />
                </ListItemButton>
            <ListItemButton onClick={() => navigate("/resignationtable")}>
                    <ListItemIcon>
                        <TableRowsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Resignation Table" />
                </ListItemButton>
            <ListItemButton onClick={() => navigate("/resignedemployees")}>
                    <ListItemIcon>
                        <TableRowsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Resigned Employees" />
                </ListItemButton>
            </List>
        )
    }
    else if(user.user_type===2||user.user_type===3)
    {
        return(
            <List component="div" disablePadding sx={{ pl: 1 }}>
            <ListItemButton onClick={() => navigate("/addemployee")}>
                    <ListItemIcon>
                        <AddIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Add Employee" />
                </ListItemButton>
            <ListItemButton onClick={() => navigate("/employeelist")}>
                    <ListItemIcon>
                        <RemoveRedEyeOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="View Employee" />
                </ListItemButton>
            <ListItemButton onClick={() => navigate("/resignationtable")}>
                    <ListItemIcon>
                        <TableRowsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Resignation Table" />
                </ListItemButton>
            <ListItemButton onClick={() => navigate("/resignedemployees")}>
                    <ListItemIcon>
                        <TableRowsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Resigned Employees" />
                </ListItemButton>
            </List>
        )
    }
    else if(user.user_type===4)
    {
        return(
            <List component="div" disablePadding sx={{ pl: 1 }}>
            <ListItemButton onClick={() => navigate("/resignationform")}>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Resignation Form" />
                </ListItemButton>
            </List>
        )
    }
    
 }

  return (
    
    <>
       <ListItemButton onClick={handleClick}>
        <ListItemIcon><GroupsIcon/></ListItemIcon>
        <ListItemText primary="EMPLOYEE" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      { renderList()}
        </Collapse>
    </>
  )

  }
 
  
  


export default ListEmpmngmnt
