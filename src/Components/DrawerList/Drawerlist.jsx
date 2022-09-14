import React from "react";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";
import ListDashboard from "./ListDashboard";
import ListEmpmngmnt from "./ListEmpmngmnt";
import ListRecmngmnt from "./ListRecmngmnt";
import ListAttmngmnt from "./ListAttmngmnt";
import ListLeavemngmnt from "./ListLeavemngmnt";
import ListLearningmngmnt from "./ListLearningmngmnt";
import ListTravelmngmnt from "./ListTravelmngmnt";
import ListTaskmngmnt from "./ListTaskmngmnt";
import ListHranalytics from "./ListHranalytics";
import ListTraining from "./ListTraining";
import ListGrievance from "./ListGrievance";
import ListVisitormngmnt from "./ListVisitormngmnt";
import { Box } from "@mui/material";

function Drawerlist() {
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.user_type)
const renderList=()=>{
  if (user.user_type === 1 || user.user_type === 2 || user.user_type === 3) {
return(
  <>
  <ListDashboard />
  <ListEmpmngmnt />
  <ListRecmngmnt />
  <ListAttmngmnt />
  <ListLeavemngmnt />
  <ListLearningmngmnt/>
  <ListTravelmngmnt/>
  <ListTaskmngmnt/>
  <ListHranalytics />
  <ListTraining/>
  <ListGrievance />
  <ListVisitormngmnt />
  </>
)
}
else if(user.user_type===4)
{
  return(
    <>
  <ListDashboard />
  <ListEmpmngmnt />
  {/* <ListAttmngmnt /> */}
  <ListLeavemngmnt />
  <ListLearningmngmnt />
  <ListTravelmngmnt />
  {/* <ListTaskmngmnt /> */}
  <ListTraining />
  <ListGrievance />
    </>
  )
}
else if(user.user_type===5)
{
  return(
    <>
  <ListDashboard />
  {/* <ListEmpmngmnt /> */}
  <ListRecmngmnt />
  {/* <ListAttmngmnt /> */}
  <ListLeavemngmnt />
  <ListLearningmngmnt />
  {/* <ListTravelmngmnt /> */}
  <ListTaskmngmnt />
  {/* <ListHranalytics /> */}
  <ListTraining />
  <ListGrievance />
  {/* <ListVisitormngmnt /> */}
    </>
  )
}
else if(user.user_type===6)
{
  return(
    <>
  <ListDashboard />
  <ListRecmngmnt />
  <ListLeavemngmnt />
 
    </>
  )
}
else if(user.user_type===7)
{
  return(
    <>
  <ListDashboard />
  <ListVisitormngmnt />
  <ListLeavemngmnt />
 
    </>
  )
}
  }
    return (
      <>
      
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            color: "white",
          }}
          component="nav"
        >
          
         {renderList()}
          {/* <ListPayrollmngmnt /> */}
          {/* <ListTimesheet /> */}
        </List>
        
      </>
    );
  }

export default Drawerlist;
