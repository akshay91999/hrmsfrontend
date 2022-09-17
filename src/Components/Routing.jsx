import React, { createContext, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Basic from "../Pages/Addemployee/Basic";
import Footer from "./Footer/Footer";
import Academic from "../Pages/Addemployee/Academic";
import PageNotfound from "../Pages/PageNotfound";
import Exp from "../Pages/Addemployee/Exp";
import Upld from "../Pages/Addemployee/Upld";
import Skills from "../Pages/Addemployee/Skills";
import Job from "../Pages/Addemployee/Job";
import EmployeeList from "../Pages/Viewemployee/EmployeeList";
import EmployeeDetail from "../Pages/Viewemployee/EmployeeDetail";
import Register from "../Pages/Addemployee/Register";
import Vaccancy from "../Pages/Recruitmentmanagement.jsx/Departmenthead/Vaccancy";
import Vaccancyview from "../Pages/Recruitmentmanagement.jsx/HR/Vaccancyview";
import Datagridfilter from "../Pages/Recruitmentmanagement.jsx/Departmenthead/Gatagridfilter";
import DashboardEmploy from "../Pages/Employee/Dashboard/DashboardEmploy";
import Tableshortlisted from "../Pages/Recruitmentmanagement.jsx/Recruiters/TableCandidateList";
import TableSelectedCandidate from "../Pages/Recruitmentmanagement.jsx/Recruiters/TableSelectedCandidate";
import LeaveUsedRemainInDetail from "./LeaveUsedRemainInDetail";
import TableSelectedList from "../Pages/Recruitmentmanagement.jsx/HR/TableSelectedList";
import AddCandidate from "../Pages/Recruitmentmanagement.jsx/Recruiters/AddCandidate";
import Vacancytofilled from "../Pages/Recruitmentmanagement.jsx/HR/Vacancytofilled";
import VacancyToBeFilled from "../Pages/Recruitmentmanagement.jsx/Recruiters/VacancyToBeFilled";
import EmployMovements from "../Pages/HrAnalytics/EmployMovements";
import BlackListedCandidate from "../Pages/Recruitmentmanagement.jsx/HR/BlackListedCandidate";
import ResignationForm from "../Pages/HrAnalytics/Resignation/ResignationForm";
import ResignationTable from "../Pages/HrAnalytics/Resignation/ResignationTable";
import GenderAnalysis from "../Pages/HrAnalytics/GenderAnalysis";
import ResignedEmployees from "../Pages/HrAnalytics/Resignation/ResignedEmployees";
import AgeGroupAnalysis from "../Pages/HrAnalytics/AgeGroupAnalysis";
import Leave from "../Pages/Leavemanagement/Leave";
import LeaveApproval from "../Pages/Leavemanagement/LeaveApproval";
import EmpLeaveList from "../Pages/Leavemanagement/EmpLeaveList";
import LeaveApprovedList from "../Pages/Leavemanagement/LeaveApprovedList";
import LeaveRejectedList from "../Pages/Leavemanagement/LeaveRejectedList";
import NumberOfLeaveAllot from "../Pages/Leavemanagement/NumberOfLeaveAllot";
import BookTrips from "../Pages/Travelmanagement/BookTrips";
import MyTransport from "../Pages/Travelmanagement/MyTransport";
import EditTrips from "../Pages/Travelmanagement/EditTrips";
import TripApproval from "../Pages/Travelmanagement/TripApproval";
import TripApprovedList from "../Pages/Travelmanagement/TripApprovedList";
import VisitorPassForm from "../Pages/Visitormanagement/VisitorPassForm";
import VisitorCard from "../Pages/Visitormanagement/VisitorCard";
import VisitorList from "../Pages/Visitormanagement/VisitorList";
import VisitorCheckOut from "../Pages/Visitormanagement/VisitorCheckOut";
import EmpProfile from "../Pages/Profile/EmpProfile";
import HrTaskEmployeeTable from "../Pages/HrtaskmgmntModule/HrTaskEmployeeTable";
import HrEmployeeIndividualTask from "../Pages/HrtaskmgmntModule/HrEmployeeIndividualTask";
import HodTaskEmployeeTable from "../Pages/HodTaskMngmntModule/HodTaskEmployeeTable";
import HodEmployeeIndividualTask from "../Pages/HodTaskMngmntModule/HodEmployeeIndividualTask";
import DepartmentHeadAssignTaskForm from "../Pages/HodTaskMngmntModule/DepartmentHeadAssignTaskForm";
import MyTask from "../Pages/MyTaskMngmntModule/MyTask";
import PopUp from "./Reusablecomponents/PopUp";
import MyAssignedTaskTable from "../Pages/MyTaskMngmntModule/MyAssignedTaskTable";
import TotalTaskTable from "./TaskTables/TotalTaskTable";
import CompletedTaskTable from "./TaskTables/CompletedTaskTable";
import OngoingTaskTable from "./TaskTables/OngoingTaskTable";
import Attandance from "../Pages/AttandanceManagement/HrAttandanceManagmnt";
import PresentTable from "./AttandanceTables/PresentTable";
import OnTimeTable from "./AttandanceTables/OnTimeTable";
import LateTimeTable from "./AttandanceTables/LateTimeTable";
import AbsentTable from "./AttandanceTables/AbsentTable";
import HrCompleteAttandanceTable from "../Pages/AttandanceManagement/CompleteAttandanceTable";

import HodShiftMgmnt from "../Pages/AttandanceManagement/HodShiftMgmnt";
import HodOvertimeMgmnt from "../Pages/AttandanceManagement/HodOvertimeMangmnt";
import MyAttancanceTable from "../Pages/EmployeeAttandance/MyAttendanceTable";
import EmpFeedback from "../Pages/EmployeeTraining/EmpFeedback";
import TrainingEmp from "../Pages/EmployeeTraining/TrainingEmp";
import TrainingDetailsEmp from "../Pages/EmployeeTraining/TrainingdetailsEmp";
import AddTrainerTrainingTimeHod from "../Pages/HodTraining/AddTrainerTrainingTimeHod";
import AllotingTrainer from "../Pages/HodTraining/AllotingTrainer";
import ViewFeedback from "../Pages/HodTraining/ViewFeedback";
import TrainingdetailsHod from "../Pages/HodTraining/TrainingdetailsHod";

import AttendanceViewHod from "../Pages/HodTraining/AttendanceViewHod";
import AcceptTraining from "../Pages/HrTraining/AcceptTraining";
import TrainingdetailsHr from "../Pages/HrTraining/TrainingdetailsHr";
import ViewFeedbackHr from "../Pages/HrTraining/ViewFeedbackHr";
import EmployeeGrievance from "../Pages/Grievance/EmployeeGrievance";
import GrievanceList from "../Pages/Grievance/GrievanceList";
import HrGrievanceTable from "../Pages/Grievance/HrGrievanceTable";
import AddLinkHod from "../Pages/LearningHod/AddLinkHod";
import ViewLinkEmployee from "../Pages/LearningEmployee/ViewLinkEmployee";
import AddLinkHr from "../Pages/LearningHr/AddLinkHr";
import LoginPage from "../Pages/LoginPage";
import DrawerandAppBar from "./Drawer_and_Appbar/DrawerandAppBar";
import AddDepartment from "../Pages/Recruitmentmanagement.jsx/HR/AddDepartment";
import TableCandidateList from "../Pages/Recruitmentmanagement.jsx/Recruiters/TableCandidateList";
import { CoPresentOutlined } from "@mui/icons-material";
import TableHrApprovedCandidate from "../Pages/Recruitmentmanagement.jsx/HR/TableHrApprovedCandidate";
import ResetPassword from "../Pages/ResetPassword";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../App";
import AcademicUpdate from "../Pages/UpdateEmployee/AcademicUpdate";



// const UserContext=createContext()
function Routing() {
  const {state,dispatch}=useContext(UserContext)
  const navigate=useNavigate()
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user)
    {
      dispatch({type:"USER",payload:user})
      navigate("/dashboard")
    }
    else{
      navigate("/")
    }
  },[])
  const logged=localStorage.getItem('jwt');
  const [loggedin,setLoggedIn]=useState(logged?true:false)
  if(!loggedin)
  {
    return(
      <Routes>
        <Route path='/' element={<LoginPage setLoggedIn={setLoggedIn}/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
        <Route path="/*" element={<PageNotfound />} />
      </Routes>
    )
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>   
        <DrawerandAppBar setLoggedIn={setLoggedIn}/>
        <Box sx={{ width: "100%" }}>
          <Box
            className="content-container"
            component="main"
            sx={{ flexGrow: 1, pt: 8, minHeight: "95vh" }}
          >
            <Routes>
             
              {/* employee viewing profile */}
              <Route path="/profile" element={<EmpProfile />} />
              {/* Resignation */}
              <Route path="/resignationform" element={<ResignationForm />} />
              <Route path="/resignationtable" element={<ResignationTable />} />
              <Route
                path="/resignedemployees"
                element={<ResignedEmployees />}
              />
              {/* dashboard employee  and add and view employ*/}
              <Route path="/dashboard" element={<DashboardEmploy />} />
              <Route path="/addemployee" element={<Basic key={window.location.pathname}/>}  />
              <Route path="/updateemployee/:basicId" element={<Basic key={window.location.pathname}/>}  />
              <Route path="/academic/:basicId" element={<Academic />} />
              <Route path="/experience/:basicId" element={<Exp />} />
              <Route path="/upload/:basicId" element={<Upld />} />
              <Route path="/skill/:basicId" element={<Skills />} />
              <Route path="/jobdetails/:basicId" element={<Job />} />
              {/* <Route path="/register" element={<Register/>} /> */}
              <Route path="/viewemployee/:basicId" element={<EmployeeDetail />} />
              <Route path="/employeelist" element={<EmployeeList />} />



              {/* Recruitment management */}

              <Route path="/adddepartment" element={<AddDepartment />} />
              <Route path="/addvaccancy" element={<Vaccancy />} />
              <Route path="/viewvaccancy" element={<Vaccancyview />} />
              <Route path="/candidatelist" element={<TableCandidateList />} />
              <Route
                path="/selectedcandidatelist"
                element={<TableSelectedCandidate />}
              />
              <Route path="/selectedlist" element={<TableSelectedList />} />
              <Route path="/addcandidate" element={<AddCandidate />} />
              <Route path="/vacancytobefilled" element={<Vacancytofilled />} />
              <Route path="/hrapprovedcandidates" element={<TableHrApprovedCandidate />} />
              <Route
                path="/vacancytobefilledrecruiters"
                element={<VacancyToBeFilled />}
              />
              <Route
                path="/blacklistedcandidate"
                element={<BlackListedCandidate />}
              />

              {/* recruitement management end */}
              <Route path="/*" element={<PageNotfound />} />
              {/* Hr analytics */}
              <Route path="/empmovements" element={<EmployMovements />} />
              <Route path="/genderanalysis" element={<GenderAnalysis />} />
              <Route path="/ageanalysis" element={<AgeGroupAnalysis />} />
              {/* Task management */}
              <Route
                path="/hrtaskemployeetable"
                element={<HrTaskEmployeeTable />}
              />
              <Route
                path="/hremployeeindividualtask/:id"
                element={<HrEmployeeIndividualTask />}
              />
              <Route
                path="/hodtaskemployeetable"
                element={<HodTaskEmployeeTable />}
              />
              <Route
                path="/hodemployeeindividualtask/:id"
                element={<HodEmployeeIndividualTask />}
              />
              <Route
                path="/departmentheadtaskassign/:basicId"
                element={<DepartmentHeadAssignTaskForm />}
              />
              <Route path="/mytask" element={<MyTask />} />
              <Route path="/popup" element={<PopUp />} />
              <Route path="/totaltasktable/:id" element={<TotalTaskTable />} />
              <Route
                path="/completedtasktable/:id"
                element={<CompletedTaskTable />}
              />
              <Route path="/ongoingtasktable/:id" element={<OngoingTaskTable />} />
              <Route
                path="/myassignedtasktable"
                element={<MyAssignedTaskTable />}
              />
              check in check out
              {/* <Route path='/' element={<CheckInCheckOut />} />

                {/*Attandance Management*/}
              <Route path="/attandance" element={<Attandance />} />
              <Route path="/presenttable" element={<PresentTable />} />
              <Route path="/ontimetable" element={<OnTimeTable />} />
              <Route path="/latetimetable" element={<LateTimeTable />} />
              <Route path="/absenttable" element={<AbsentTable />} />
              <Route
                path="/hrcompleteattandancetable"
                element={<HrCompleteAttandanceTable />}
              />
              <Route path="/hodassignshift" element={<HodShiftMgmnt />} />
              <Route path="/hodassignovertime" element={<HodOvertimeMgmnt />} />
              <Route path="/myattandance" element={<MyAttancanceTable />} />
              {/* leaveused remain */}
              <Route
                path="/LeaveUsedRemainInDetail/:id" element={<LeaveUsedRemainInDetail />}/>
              {/* Routing For Leave Management */}
              <Route path="/Leave" element={<Leave />} />
              <Route path="/LeaveApproval" element={<LeaveApproval />} />
              <Route path="/EmpLeaveList" element={<EmpLeaveList />} />
              <Route path="LeaveApprovedList" element={<LeaveApprovedList />} />
              <Route path="LeaveRejectedList" element={<LeaveRejectedList />} />
              <Route
                path="/NumberOfLeaveAllot"
                element={<NumberOfLeaveAllot />}
              />
              {/* Routing For Leave Management */}
              {/* Routing For Travel Management */}
              <Route path="/BookTrips" element={<BookTrips />} />
              <Route path="/MyTransport" element={<MyTransport />} />
              <Route path="/EditTrips/:id" element={<EditTrips />} />
              <Route path="/TripApproval" element={<TripApproval />} />
              <Route path="/TripApprovedList" element={<TripApprovedList />} />
              {/* Routing For Travel Management */}
              {/* Routing For Visitor Management */}
              <Route path="/VisitorPassForm" element={<VisitorPassForm />} />
              <Route path="/VisitorCard" element={<VisitorCard />} />
              <Route path="/VisitorList" element={<VisitorList />} />
              <Route path="/VisitorCheckOut" element={<VisitorCheckOut />} />
              {/* Routing For Visitor Management */}
              {/* Routing for Grievance */}
              <Route
                path="/EmployeeGrievance"
                element={<EmployeeGrievance />}
              />
              <Route path="/HrGrievanceTable" element={<HrGrievanceTable />} />
              <Route path="/GrievanceList" element={<GrievanceList />} />
              {/* Routing for Training Employee */}
              <Route path="/EmpFeedback" element={<EmpFeedback />} />
              <Route path="/TrainingEmp" element={<TrainingEmp />} />
              <Route
                path="/TrainingDetailsEmp"
                element={<TrainingDetailsEmp />}
              />
              {/* Routing for Training Hod */}
              <Route
                path="/AddTrainerTrainingTimeHod"
                element={<AddTrainerTrainingTimeHod />}
              />
              <Route path="/AllotingTrainer" element={<AllotingTrainer />} />
              <Route
                path="/AttendanceViewHod"
                element={<AttendanceViewHod />}
              />
              <Route
                path="/TrainingdetailsHod"
                element={<TrainingdetailsHod />}
              />
              <Route path="/ViewFeedback" element={<ViewFeedback />} />
              {/* Routing for Training Hr */}
              <Route path="/AcceptTraining" element={<AcceptTraining />} />
              <Route
                path="/TrainingdetailsHr"
                element={<TrainingdetailsHr />}
              />
              <Route path="/ViewFeedbackHr" element={<ViewFeedbackHr />} />
              {/* Routing for Employee Learning and Training */}
              <Route path="/ViewLinkEmployee" element={<ViewLinkEmployee />} />
              <Route path="/AddLinkHod" element={<AddLinkHod />} />
              <Route path="/AddLinkHr" element={<AddLinkHr />} />

              {/* update employee details */}
              <Route path="/updateaccademic/:basicId" element={<AcademicUpdate/>}/>
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Routing;
