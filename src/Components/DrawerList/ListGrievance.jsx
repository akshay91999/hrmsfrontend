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
                <ListItemText primary="ADD GRIEVANCE" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/HrGrievanceTable")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="GRIEVANCE TABLE" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/GrievanceList")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="GRIEVANCE LIST" />
            </ListItemButton>
        {/* <ListItemButton onClick={() => navigate("/candidatelist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="CANDIDATE LIST" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/selectedcandidatelist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="SELECTED LIST" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/selectedlist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="SELECTED LIST (HR)" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/addcandidate")}>
                <ListItemIcon>
                <AddIcon/>
                </ListItemIcon>
                <ListItemText primary="ADD CANDIDATE" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/vacancytobefilled")}>
                <ListItemIcon>
                <PlaylistAddCheckIcon/>
                </ListItemIcon>
                <ListItemText primary="VACANCY TO BE FILLED" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/vacancytobefilledrecruiters")}>
                <ListItemIcon>
                <PlaylistAddCheckIcon/>
                </ListItemIcon>
                <ListItemText primary="VACANCY TO BE FILLED" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/blacklistedcandidate")}>
                <ListItemIcon>
                <ContrastIcon/>
                </ListItemIcon>
                <ListItemText primary="BLACKLISTED CANDIDATE" />
            </ListItemButton> */}
        </List>
        </Collapse>
    </>
  )

}

export default ListGrievance