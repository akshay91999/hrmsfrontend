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
    const [open, setOpen] = React.useState(false);
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
            <ListItemButton onClick={() => navigate("/AddLinkHr")}>
                <ListItemIcon>
                    <LocalLibraryIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Link(HR)" />
            </ListItemButton>
          </List>
          </Collapse>
    </>
  )
}

export default ListLearningmngmnt