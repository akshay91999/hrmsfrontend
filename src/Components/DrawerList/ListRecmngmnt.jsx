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
import userEvent from '@testing-library/user-event';


function ListRecmngmnt() {
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
        <ListItemButton onClick={() => navigate("/adddepartment")}>
                <ListItemIcon>
                    <DynamicFormIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Department"/>
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/addvaccancy")}>
                <ListItemIcon>
                    <DynamicFormIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Vaccancy" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/viewvaccancy")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="View Vaccancy" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/vacancytobefilled")}>
                <ListItemIcon>
                <PlaylistAddCheckIcon/>
                </ListItemIcon>
                <ListItemText primary="Vacancy To Be Filled" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/vacancytobefilledrecruiters")}>
                <ListItemIcon>
                <PlaylistAddCheckIcon/>
                </ListItemIcon>
                <ListItemText primary="Vacancy To Be Filled" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/addcandidate")}>
                <ListItemIcon>
                <AddIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Candidate" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/candidatelist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Candidate List" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/selectedcandidatelist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Shortlisted Candidate" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/selectedlist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Shortlisted Candidate(HR)" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/hrapprovedcandidates")}>
                <ListItemIcon>
                <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Selected Candidate List" />
            </ListItemButton>   
        <ListItemButton onClick={() => navigate("/blacklistedcandidate")}>
                <ListItemIcon>
                <ContrastIcon/>
                </ListItemIcon>
                <ListItemText primary="Blacklisted Candidate" />
            </ListItemButton>
        </List>
        )
    }
    else if(user.user_type===2||user.user_type===3)
    {
        return(
        <List component="div" disablePadding sx={{ pl: 1 }}>
        <ListItemButton onClick={() => navigate("/adddepartment")}>
                <ListItemIcon>
                    <DynamicFormIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Department"/>
            </ListItemButton>
        {/* <ListItemButton onClick={() => navigate("/addvaccancy")}>
                <ListItemIcon>
                    <DynamicFormIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Vaccancy" />
            </ListItemButton> */}
        <ListItemButton onClick={() => navigate("/viewvaccancy")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="View Vaccancy" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/vacancytobefilled")}>
                <ListItemIcon>
                <PlaylistAddCheckIcon/>
                </ListItemIcon>
                <ListItemText primary="Vacancy To Be Filled" />
            </ListItemButton>
        {/* <ListItemButton onClick={() => navigate("/vacancytobefilledrecruiters")}>
                <ListItemIcon>
                <PlaylistAddCheckIcon/>
                </ListItemIcon>
                <ListItemText primary="Vacancy To Be Filled" />
            </ListItemButton> */}
            {/* <ListItemButton onClick={() => navigate("/addcandidate")}>
                <ListItemIcon>
                <AddIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Candidate" />
            </ListItemButton> */}
        {/* <ListItemButton onClick={() => navigate("/candidatelist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Candidate List" />
            </ListItemButton> */}
        <ListItemButton onClick={() => navigate("/selectedcandidatelist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Shortlisted Candidate" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/selectedlist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Shortlisted Candidate(HR)" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/hrapprovedcandidates")}>
                <ListItemIcon>
                <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Selected Candidate List" />
            </ListItemButton>   
        <ListItemButton onClick={() => navigate("/blacklistedcandidate")}>
                <ListItemIcon>
                <ContrastIcon/>
                </ListItemIcon>
                <ListItemText primary="Blacklisted Candidate" />
            </ListItemButton>
        </List> 
        )
    }
    else if(user.user_type===5)
    {
        return(
            <List component="div" disablePadding sx={{ pl: 1 }}>
       
        <ListItemButton onClick={() => navigate("/addvaccancy")}>
                <ListItemIcon>
                    <DynamicFormIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Vaccancy" />
            </ListItemButton>  
        <ListItemButton onClick={() => navigate("/hrapprovedcandidates")}>
                <ListItemIcon>
                <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Selected Candidate List" />
            </ListItemButton>   
        </List>
        )
    }
    else if(user.user_type===6)
    {
        return(
        <List component="div" disablePadding sx={{ pl: 1 }}>
       
        <ListItemButton onClick={() => navigate("/viewvaccancy")}>
                <ListItemIcon>
                    <PreviewIcon/>
                </ListItemIcon>
                <ListItemText primary="View Vaccancy" />
            </ListItemButton>
           
        <ListItemButton onClick={() => navigate("/vacancytobefilledrecruiters")}>
                <ListItemIcon>
                <PlaylistAddCheckIcon/>
                </ListItemIcon>
                <ListItemText primary="Vacancy To Be Filled" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/addcandidate")}>
                <ListItemIcon>
                <AddIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Candidate" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/candidatelist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Candidate List" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/selectedcandidatelist")}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Shortlisted Candidate" />
            </ListItemButton>
        <ListItemButton onClick={() => navigate("/hrapprovedcandidates")}>
                <ListItemIcon>
                <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="Selected Candidate List" />
            </ListItemButton>   
        <ListItemButton onClick={() => navigate("/blacklistedcandidate")}>
                <ListItemIcon>
                <ContrastIcon/>
                </ListItemIcon>
                <ListItemText primary="Blacklisted Candidate" />
            </ListItemButton>
        </List> 
        )
    }
  }
  return (
    <>
       <ListItemButton onClick={handleClick}>
        <ListItemIcon><HandshakeIcon/></ListItemIcon>
        <ListItemText primary="RECRUITMENT" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
       {renderList()}
        </Collapse>
    </>
  )

}

export default ListRecmngmnt
