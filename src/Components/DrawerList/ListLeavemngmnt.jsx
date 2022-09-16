import React from 'react'
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from "@mui/icons-material/Article";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { List } from "@mui/material";
import NoteAltSharpIcon from '@mui/icons-material/NoteAltSharp';
import AssignmentTurnedInSharpIcon from '@mui/icons-material/AssignmentTurnedInSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import PlaylistAddCheckSharpIcon from '@mui/icons-material/PlaylistAddCheckSharp';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import HowToRegIcon from '@mui/icons-material/HowToReg';
function ListLeavemngmnt() {
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const user=JSON.parse(localStorage.getItem('user'))
    const handleClick = () => {
      setOpen(!open);
    };
    const renderList=()=>{
      if(user.user_type===1||user.user_type===3)
      {
        return(
        <List component="div" disablePadding sx={{ pl: 1 }}>
           <ListItemButton onClick={() => navigate("/NumberOfLeaveAllot")}>
            <ListItemIcon>
            <HowToRegIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Allot" />
          </ListItemButton>
     <ListItemButton onClick={() => navigate("/Leave")}>
            <ListItemIcon>
              <NoteAltSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Form" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/LeaveApproval")}>
            <ListItemIcon>
            <AssignmentTurnedInSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Approval(HR)" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/EmpLeaveList")}>
            <ListItemIcon>
            <ListSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leaves Applied" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/LeaveApprovedList")}>
            <ListItemIcon>
            <PlaylistAddCheckSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Approved List" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/LeaveRejectedList")}>
            <ListItemIcon>
            <PlaylistRemoveIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Rejected List" />
          </ListItemButton>
         
     </List>
     )
      }
      else if(user.user_type===2)
      {
        return(
          <List component="div" disablePadding sx={{ pl: 1 }}>
    
          <ListItemButton onClick={() => navigate("/LeaveApproval")}>
            <ListItemIcon>
            <AssignmentTurnedInSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Approval(HR)" />
          </ListItemButton>
          
          <ListItemButton onClick={() => navigate("/LeaveApprovedList")}>
            <ListItemIcon>
            <PlaylistAddCheckSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Approved List" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/LeaveRejectedList")}>
            <ListItemIcon>
            <PlaylistRemoveIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Rejected List" />
          </ListItemButton>
          {/* <ListItemButton onClick={() => navigate("/NumberOfLeaveAllot")}>
            <ListItemIcon>
            <HowToRegIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Allot" />
          </ListItemButton> */}
     </List>

)
      }
      else if(user.user_type===4||user.user_type===6||user.user_type===7)
      {
        return(
          <List component="div" disablePadding sx={{ pl: 1 }}>
            <ListItemButton onClick={() => navigate("/Leave")}>
            <ListItemIcon>
              <NoteAltSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Form" />
          </ListItemButton>
    
          <ListItemButton onClick={() => navigate("/EmpLeaveList")}>
            <ListItemIcon>
            <ListSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leaves Applied" />
          </ListItemButton>
     </List>

)
      }
      else if(user.user_type===5)
      {
        return(
          <List component="div" disablePadding sx={{ pl: 1 }}>
            <ListItemButton onClick={() => navigate("/Leave")}>
            <ListItemIcon>
              <NoteAltSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Form" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/LeaveApproval")}>
            <ListItemIcon>
            <AssignmentTurnedInSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Approval(HR)" />
          </ListItemButton>
    
          <ListItemButton onClick={() => navigate("/EmpLeaveList")}>
            <ListItemIcon>
            <ListSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leaves Applied" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/LeaveApprovedList")}>
            <ListItemIcon>
            <PlaylistAddCheckSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Approved List" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/LeaveRejectedList")}>
            <ListItemIcon>
            <PlaylistRemoveIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Rejected List" />
          </ListItemButton>

     </List>

)
      }
      
    }
  return (
    <>
     <ListItemButton onClick={handleClick}>
        <ListItemIcon><ArticleIcon/></ListItemIcon>
        <ListItemText primary="LEAVE MANAGEMNET" />
        {open ? <ExpandLess /> : <ExpandMore />}
     </ListItemButton>
     <Collapse in={open} timeout="auto" unmountOnExit>
     {renderList()}
      </Collapse>
    </>
  )
}

export default ListLeavemngmnt