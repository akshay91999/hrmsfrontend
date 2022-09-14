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
    const user = JSON.parse(localStorage.getItem("user"));
    const renderList=()=>{
        if(user.user_type===1)
        {
return(
    <List component="div" disablePadding sx={{ pl: 1 }}>
        <ListItemButton onClick={() => navigate("/TrainingEmp")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Training Request" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/EmpFeedback")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Employee Feedback" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/TrainingDetailsEmp")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Training Details(EMP)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/AddTrainerTrainingTimeHod")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Training" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/AllotingTrainer")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Allot Trainer" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/AttendanceViewHod")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Attendance(VIEW BY HOD)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/TrainingdetailsHod")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Training Details (HOD)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/ViewFeedback")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Feedback(VIEW HOD)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/AcceptTraining")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Accept Training(HR)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/TrainingdetailsHr")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Training Details(VIEW HR)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/ViewFeedbackHr")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Feedback(VIEW HR)" />
            </ListItemButton>
          </List>
)
        }
        else if(user.user_type===2||user.user_type===3)
        {
            return(
                <List>
                <ListItemButton onClick={() => navigate("/AcceptTraining")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Accept Training(HR)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/TrainingdetailsHr")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Training Details(VIEW HR)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/ViewFeedbackHr")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Feedback(VIEW HR)" />
            </ListItemButton>
            </List>
            )
        }
        else if(user.user_type===5)
        {
            <List>
              <ListItemButton onClick={() => navigate("/AddTrainerTrainingTimeHod")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Training" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/AllotingTrainer")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Allot Trainer" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/AttendanceViewHod")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Attendance(VIEW BY HOD)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/TrainingdetailsHod")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Training Details (HOD)" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/ViewFeedback")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="Feedback(VIEW HOD)" />
            </ListItemButton>
        </List> 
        }
        else if(user.user_type===4)
        {
           return(
            <List>
            <ListItemButton onClick={() => navigate("/TrainingEmp")}>
            <ListItemIcon>
                <ModelTrainingIcon/>
            </ListItemIcon>
            <ListItemText primary="Training Request" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/EmpFeedback")}>
            <ListItemIcon>
                <ModelTrainingIcon/>
            </ListItemIcon>
            <ListItemText primary="Employee Feedback" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/TrainingDetailsEmp")}>
            <ListItemIcon>
                <ModelTrainingIcon/>
            </ListItemIcon>
            <ListItemText primary="Training Details(EMP)" />
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
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="TRAINING" />
                {open ? <ExpandLess /> : <ExpandMore />}

            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
            {renderList()}        

          </Collapse>
    </>
  )
}

export default ListTraining