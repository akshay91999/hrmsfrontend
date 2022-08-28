// import React from 'react'
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import { useNavigate } from 'react-router-dom';
// import ModelTrainingIcon from "@mui/icons-material/ModelTraining";


// function ListTraining() {
//     let navigate = useNavigate();
//   return (
//     <>
//        <ListItemButton onClick={() => navigate("/")}>
//                 <ListItemIcon>
//                     <ModelTrainingIcon/>
//                 </ListItemIcon>
//                 <ListItemText primary="TRAINING" />
//             </ListItemButton>
//     </>
//   )
// }

// export default ListTraining


import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse, List } from '@mui/material';


function ListTraining() {
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <>
       <ListItemButton  onClick={handleClick}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="TRAINING" />
                {open ? <ExpandLess /> : <ExpandMore />}

            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 1 }}>
        <ListItemButton onClick={() => navigate("/TrainingEmp")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="TRAINING REQUEST" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/EmpFeedback")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="EMPLOYEES FEEDBACK" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/TrainingDetailsEmp")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="TRAINING DETAILS(EMP)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/AddTrainerTrainingTimeHod")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="ADD TRAINING" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/AllotingTrainer")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="ALLOT TRAINER" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/AttendanceViewHod")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="ATTENDANCE(VIEW BY HOD)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/TrainingdetailsHod")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="TRAINING DETAILS (HOD)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/ViewFeedback")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="FEEDBACK(VIEW HOD)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/AcceptTraining")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="ACCEPT TRAINING(HR)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/TrainingdetailsHr")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="TRAINING DETAILS(VIEW HR)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/ViewFeedbackHr")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="FEEDBACK(VIEW HR)" />
            </ListItemButton>


          </List>

          </Collapse>
    </>
  )
}

export default ListTraining