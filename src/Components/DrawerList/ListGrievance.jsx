// import React from 'react'
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import { useNavigate } from 'react-router-dom';
// import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";


// function ListGrievance() {
//     let navigate = useNavigate();
//   return (
//     <>
//      <ListItemButton onClick={() => navigate("/")}>
//                 <ListItemIcon>
//                     <MarkAsUnreadIcon/>
//                 </ListItemIcon>
//                 <ListItemText primary="GRIEVANCE" />
//             </ListItemButton> 
//     </>
//   )
// }

// export default ListGrievance


import React from 'react'
import { List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import HandshakeIcon from "@mui/icons-material/Handshake";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import PreviewIcon from "@mui/icons-material/Preview";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from "@mui/icons-material/Add";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ContrastIcon from '@mui/icons-material/Contrast';


function ListGrievance() {
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const user=JSON.parse(localStorage.getItem('user'))
    const renderList=()=>{
      if(user.user_type===1){
        return(
        <List component="div" disablePadding sx={{ pl: 1 }}>
        <ListItemButton onClick={() => navigate("/EmployeeGrievance")}>
                <ListItemIcon>
                    <DynamicFormIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Grievance" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/HrGrievanceTable")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="Grievance Table" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/GrievanceList")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="Grievance List" />
            </ListItemButton>
        </List>
        )
      }
      else if(user.user_type===2||user.user_type===3){
        return(
        <List component="div" disablePadding sx={{ pl: 1 }}>
        <ListItemButton onClick={() => navigate("/HrGrievanceTable")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="Grievance Table" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/GrievanceList")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="Grievance List" />
            </ListItemButton>
        </List>
        )
      }
      else if(user.user_type===4||user.user_type===5||user.user_type===7||user.user_type===6){
        return(
        <List component="div" disablePadding sx={{ pl: 1 }}>
         <ListItemButton onClick={() => navigate("/EmployeeGrievance")}>
                <ListItemIcon>
                    <DynamicFormIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Grievance" />
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
        <ListItemIcon><HandshakeIcon/></ListItemIcon>
        <ListItemText primary="GRIEVANCE" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 1 }}>
        <ListItemButton onClick={() => navigate("/EmployeeGrievance")}>
                <ListItemIcon>
                    <DynamicFormIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Grievance" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/HrGrievanceTable")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="Grievance Table" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/GrievanceList")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="Grievance List" />
            </ListItemButton>
        </List>
        </Collapse>
    </>
  )

}

export default ListGrievance