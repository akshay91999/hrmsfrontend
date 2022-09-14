// import React from 'react'
// import { useNavigate } from "react-router-dom";
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";


// function ListLearningmngmnt() {
//     let navigate = useNavigate();
//   return (
//     <>
//       <ListItemButton onClick={() => navigate("/")}>
//                 <ListItemIcon>
//                     <LocalLibraryIcon/>
//                 </ListItemIcon>
//                 <ListItemText primary="LEARNING" />
//             </ListItemButton>  
//     </>
//   )
// }

// export default ListLearningmngmnt
import React from 'react'
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Collapse, List } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


function ListLearningmngmnt() {
    let navigate = useNavigate();
    const user=JSON.parse(localStorage.getItem('user'))
    const [open, setOpen] = React.useState(false);
    const renderList=()=>{
      if(user.user_type===1||user.user_type===2||user.user_type===3||user.user_type===6){
        return(
          <List component="div" disablePadding sx={{ pl: 1 }}>
          <ListItemButton onClick={() => navigate("/ViewLinkEmployee")}>
                  <ListItemIcon>
                      <LocalLibraryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="View Link" />
              </ListItemButton>
              
              <ListItemButton onClick={() => navigate("/AddLinkHr")}>
                  <ListItemIcon>
                      <LocalLibraryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Add Link(HR)" />
              </ListItemButton>
              <ListItemButton onClick={() => navigate("/AddLinkHod")}>
                  <ListItemIcon>
                      <LocalLibraryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Add Link(HOD)" />
              </ListItemButton>
            </List>
        )
      }
      else if(user.user_type===4||user.user_type===6){
        return(
          <List component="div" disablePadding sx={{ pl: 1 }}>
          <ListItemButton onClick={() => navigate("/ViewLinkEmployee")}>
                  <ListItemIcon>
                      <LocalLibraryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="View Link" />
              </ListItemButton>
            </List>
        )
      }
      else if(user.user_type===5){
        return(
          <List component="div" disablePadding sx={{ pl: 1 }}>
          <ListItemButton onClick={() => navigate("/ViewLinkEmployee")}>
                  <ListItemIcon>
                      <LocalLibraryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="View Link" />
              </ListItemButton>
              <ListItemButton onClick={() => navigate("/AddLinkHod")}>
                  <ListItemIcon>
                      <LocalLibraryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Add Link(HOD)" />
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
      <ListItemButton  onClick={handleClick}>
                <ListItemIcon>
                    <LocalLibraryIcon/>
                </ListItemIcon>
                <ListItemText primary="LEARNING" />
                {open ? <ExpandLess /> : <ExpandMore />}

            </ListItemButton>  
            <Collapse in={open} timeout="auto" unmountOnExit>
       {renderList()}
          </Collapse>
    </>
  )
}

export default ListLearningmngmnt